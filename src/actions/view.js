import {retrieveFirmwareHistory} from "../blockchain/firmwareHistory";
import {retrieveStatsDetails} from "../blockchain/userStats";
import {SEARCH_SUCCESS} from "./search";
import {FirmwareWithThumbs} from "../model/Firmware";
import Profile, {ProfileWithStats} from "../model/Profile";

export const VIEW_FIRMWARE_SET = "VIEW_FIRMWARE_SET";
export const VIEW_PROFILE_SET = "VIEW_PROFILE_SET";
export const VIEW_BOUNTY_SET = "VIEW_BOUNTY_SET";


function setFirmware(payload) {
  return {
    type: VIEW_FIRMWARE_SET,
    payload,
  }
}

function setProfile(payload) {
  return {
    type: VIEW_PROFILE_SET,
    payload
  };
}

function setBounty(payload) {
  return {
    type: VIEW_BOUNTY_SET,
    payload
  }
}

const exampleTempFirmwareSource = `
/*
  Analog input, analog output, serial output

  Reads an analog input pin, maps the result to a range from 0 to 255 and uses
  the result to set the pulse width modulation (PWM) of an output pin.
  Also prints the results to the Serial Monitor.

  The circuit:
  - potentiometer connected to analog pin 0.
    Center pin of the potentiometer goes to the analog pin.
    side pins of the potentiometer go to +5V and ground
  - LED connected from digital pin 9 to ground

  created 29 Dec. 2008
  modified 9 Apr 2012
  by Tom Igoe

  This example code is in the public domain.

  http://www.arduino.cc/en/Tutorial/AnalogInOutSerial
*/

// These constants won't change. They're used to give names to the pins used:
const int analogInPin = A0;  // Analog input pin that the potentiometer is attached to
const int analogOutPin = 9; // Analog output pin that the LED is attached to

int sensorValue = 0;        // value read from the pot
int outputValue = 0;        // value output to the PWM (analog out)

void setup() {
  // initialize serial communications at 9600 bps:
  Serial.begin(9600);
}

void loop() {
  // read the analog in value:
  sensorValue = analogRead(analogInPin);
  // map it to the range of the analog out:
  outputValue = map(sensorValue, 0, 1023, 0, 255);
  // change the analog out value:
  analogWrite(analogOutPin, outputValue);

  // print the results to the Serial Monitor:
  Serial.print("sensor = ");
  Serial.print(sensorValue);
  Serial.print("\t output = ");
  Serial.println(outputValue);

  // wait 2 milliseconds before the next loop for the analog-to-digital
  // converter to settle after the last reading:
  delay(2);
}
`

export function initFirmwareView(payload) {

  return (dispatch) => {

    // TODO pull all the info from the backend necessary for the firmware page

    // TODO pull source from IPFS using the link
    let firmwareStats = new FirmwareWithThumbs(payload.firmwareObj.name); // return updated firmware objects //TODO replace this with stats object
    let firmwareSource = exampleTempFirmwareSource;
    let firmwareDeveloper = new ProfileWithStats("", "", "","", "",
      "", "");


    // change the app location and set the firmware page
    dispatch(setFirmware({firmwareStats: firmwareStats, firmwareSource: firmwareSource, firmwareDeveloper: firmwareDeveloper}));
    payload.history.push('/app/firmware');
  }
}

/**
 * Pull all the info from the backend necessary for the profile page.
 * @param payload
 * @returns {function(...[*]=)}
 */
export function initProfileView(payload) {

  return (dispatch) => {

    let profileWithStats = retrieveStatsDetails(payload.profile);
    let profileFirmwareHistory = retrieveFirmwareHistory(payload.profile.address);

    // change the app location and set the firmware page
    dispatch(setProfile({profileWithStats: profileWithStats, profileFirmwareHistory: profileFirmwareHistory}));
    payload.history.push('/app/profile');
  }
}

export function initBountyView(payload) {

  return (dispatch) => {

    // TODO pull all the info from the backend necessary for the bounty page

    console.log("initial initProfileView", payload);

    let profileWithStats = retrieveStatsDetails(payload.profile);
    let profileFirmwareHistory = retrieveFirmwareHistory(payload.profile.address);

    console.log("init profile view", profileWithStats, profileFirmwareHistory, typeof profileWithStats, typeof profileFirmwareHistory)


    // change the app location and set the firmware page
    dispatch(setBounty({bountyView: payload.bountyObject}));
    payload.history.push('/app/bounty');
  }
}
