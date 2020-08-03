#!/usr/bin/env python3
import time
import hashlib
from termcolor import colored
import sys

from alive_progress import alive_bar
import paho.mqtt.client as mqtt

client_name = "uno"


def animate(length):
    with alive_bar(length) as bar:
        for item in range(0, length):
            time.sleep(.002)
            bar()


def on_connect(client, userdata, flags, rc):
    print("Connected with result code " + str(rc))
    client.message_callback_add("codigo/firmware/"+client_name, upgrade_firmware)
    client.subscribe("codigo/#")


def md5_firmware(firmware_binary):
    hash_md5 = hashlib.md5()
    hash_md5.update(firmware_binary)
    return hash_md5.hexdigest()


def upgrade_firmware(client, userdata, msg):
    filename = '/tmp/output.bin'
    firmware = msg.payload
    print('Downloading firmware')
    with open(filename, 'wb') as f:
        f.write(firmware)
    animate(700)
    print('Downloaded at {}, md5 hash: {}'.format(filename, md5_firmware(firmware)))
    print('Press any key to abort firmware upgrade...')
    time.sleep(2)
    print('Extracting binary file...')
    animate(400)
    print('Flashing firmware. ' + colored('Do not power off while flashing', 'red'))
    animate(300)
    print('Press any key to restart device.')


def on_message(client, userdata, msg):
    print('received message ' + msg)


def send_keepalive(client):
    if not client.is_connected():
        print('Client is disconnected, cant send keepalive')
    else:
        client.publish('codigo/active', payload=client_name, qos=2)


if __name__ == "__main__":
    if len(sys.argv) > 1:
        client_name = sys.argv[1]
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
