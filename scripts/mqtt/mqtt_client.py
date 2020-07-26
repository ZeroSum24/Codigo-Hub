import time

import paho.mqtt.client as mqtt

client_name = "uno"


def on_connect(client, userdata, flags, rc):
    print("Connected with result code " + str(rc))
    client.message_callback_add("codigo/firmware/"+client_name, upgrade_firmware)
    client.subscribe("codigo/#")


def upgrade_firmware(client, userdata, msg):
    firmware = msg.payload
    print('firmware upgrade: ' + msg.topic + " " + str(msg.payload))
    with open('/tmp/output.bin', 'wb') as f:
        f.write(firmware)


def on_message(client, userdata, msg):
    print('received message ' + msg)


def send_keepalive(client):
    if not client.is_connected():
        print('Client is disconnected, cant send keepalive')
    else:
        print('Sending keepalive')
        client.publish('codigo/active', payload=client_name, qos=2)


if __name__ == "__main__":
    client = mqtt.Client(client_id=client_name, clean_session=True, userdata=None, protocol=mqtt.MQTTv311, transport="websockets")
    client.on_connect = on_connect
    client.connect("broker.mqttdashboard.com", 8000, 60)
    client.loop_start()
    try:
        while True:
            send_keepalive(client)
            time.sleep(20)
    finally:
        client.loop_stop()
        client.disconnect()
        print('exiting')
