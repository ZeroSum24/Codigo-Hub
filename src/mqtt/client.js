import * as Paho from 'paho-mqtt';

// Create a client instance
const broker = 'test.mosquitto.org';
const port = '8081';
// random client name to avoid being kicked out if multiple users are using the Dapp
const clientID = Math.random().toString(36).substring(7);
export const client = new Paho.Client(broker, Number(port), clientID);
// set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;
client.connect({
  onSuccess: onConnect,
  onFailure: onFailureConnect,
  reconnect: true,
  useSSL: true,
});

// map deviceName -> timestamp of last ping received
const activeDevicesMap = {};

function onFailureConnect(e) {
  console.error('cant connect to mqtt broker', e);
}

// called when the client connects
function onConnect() {
  console.log('connected');
  client.subscribe("codigo/active", {qos: 2});
}

function publish(stringMessage, topic) {
  const message = new Paho.Message(stringMessage);
  message.destinationName = topic;
  message.qos = 2
  client.send(message);
}

function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+responseObject.errorMessage);
  }
}

function onMessageArrived(message) {
  const topic = message.destinationName;
  const payload = message.payloadString;
  if (topic === 'codigo/active') {
    console.log("Device "+payload+ ' is active!');
    activeDevicesMap[payload] = Date.now();
  }
}
// if we heard of it in the last minute, it's online
export function isDeviceActive(deviceName) {
  const timestamp = activeDevicesMap[deviceName];
  if (timestamp == null) return false;
  return ((Date.now() - timestamp) /1000) < 60;
}

/**
 * Here we can either send an IPFS link if the device is running an IPFS client or
 * we can send the actual firmware itself as a binary array. MQTT supports messages of up to
 * 250MB I believe thus we can literally send the binary over MQTT
 * (shouldnt be more than 20-50MB but for demo purposes lets keep it lower)
 * @param deviceName
 * @param {ArrayBuffer|String} firmware
 */
export function requestFirmwareUpgrade(deviceName, firmware) {
  publish(firmware, 'codigo/firmware/'+deviceName)
}
