import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { IconButton } from '@material-ui/core';
import ThreeBoxComments from '3box-comments-react';

import { Row, Col, Container, Card, CardTitle, CardText, CardBody, Button } from 'reactstrap';

class Firmware extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			code: '',
			checkedArr: [ false, false, false ],
			score: '123',
			adminEthAddr: '0xf7367F3abDB31428Ed56032AbC14B245fCC95BA2',
			box: '123',
			myAddress: '0xf7367F3abDB31428Ed56032AbC14B245fCC95BA2'
		};
	}

	render() {
		const codeString = `
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
`;

		return (
			<div>
				<h1 align="centre" className="page-title">
					Firmware name &nbsp;
				</h1>
				<Container fluid={true}>
					<Row>
						<Col xs={12} sm={12} md={9}>
							<SyntaxHighlighter
								language="javascript"
								showLineNumbers
								style={atomDark}
								customStyle={{ height: '500px' }}
							>
								{codeString}
							</SyntaxHighlighter>{' '}
							<br />
							<br />
							<br />
							<Row>
								<Col xs="2" sm="2" md="2" />{' '}
								<Col xs="auto" sm="auto" md="auto">
									<ThreeBoxComments
										// required
										spaceName="mySpaceName"
										threadName="myThreadName"
										adminEthAddr={this.state.adminEthAddr}
										// Required props for auth A. & B.
										box={this.state.box}
										currentUserAddr={this.state.myAddress}
									/>{' '}
								</Col>
								<Col xs="2" sm="2" md="2" />
							</Row>
						</Col>
						<Col xs={12} sm={12} md={3}>
							<Card body outline color="primary">
								<CardTitle>Details Box</CardTitle>
								<CardText>
									With supporting text below as a natural lead-in to additional content.
								</CardText>
							</Card>
							<br />
							<br />
							<Row>
								{' '}
								<Col sm={4} md={2} />
								<Col sm="auto">
									{' '}
									<Button style={{ width: '180px' }} color="info">
										Download{' '}
									</Button>
								</Col>
								<Col sm={4} md={2} />
							</Row>
							<br />
							<Row>
								{' '}
								<Col sm={4} md={2} />
								<Col sm="auto">
									{' '}
									<Button style={{ width: '180px' }} color="primary">
										Deploy to Device{' '}
									</Button>
								</Col>
								<Col sm={4} md={2} />
							</Row>
							<br />
							<Row>
								{' '}
								<Col sm={4} md={2} />
								<Col sm="auto" md="auto">
									{' '}
									<Button style={{ width: '180px' }} color="success">
										Donate to DEV{' '}
									</Button>
								</Col>
								<Col sm={4} md={2} />
							</Row>
							<br />
							<br />
							<Card>
								<CardBody>
									<CardTitle>
										{' '}
										<IconButton color="inherit">
											<ThumbUpIcon />{' '}
										</IconButton>
										<IconButton color="inherit">
											<ThumbDownIcon />
										</IconButton>
									</CardTitle>
									<CardText>Community Score ammount of {this.state.score} </CardText>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Firmware;
