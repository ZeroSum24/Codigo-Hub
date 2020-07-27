#!/usr/bin/env python3
import time
import hashlib

import paho.mqtt.client as mqtt

client_name = "uno"


def on_connect(client, userdata, flags, rc):
    print("Connected with result code " + str(rc))
    client.message_callback_add("codigo/firmware/"+client_name, upgrade_firmware)
    client.subscribe("codigo/#")


def md5_firmware(firmware_binary):
    hash_md5 = hashlib.md5()
    hash_md5.update(firmware_binary)
    return hash_md5.hexdigest()


def upgrade_firmware(client, userdata, msg):
    firmware = msg.payload
    print('firmware upgrade: ' + msg.topic + ' md5: ' + md5_firmware(firmware))
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
    client = mqtt.Client(client_id=client_name, clean_session=True, userdata=None, protocol=mqtt.MQTTv311, transport="websockets", )
    client.on_connect = on_connect
    client.tls_set_context(context=None)
    client.connect("test.mosquitto.org", 8081, 60)
    client.loop_start()
    try:
        while True:
            send_keepalive(client)
            time.sleep(20)
    finally:
        client.loop_stop()
        client.disconnect()
        print('exiting')
