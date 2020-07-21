import React from 'react';
import {
    Row,
    Col,
} from 'reactstrap';

import Widget from '../../components/Widget';

const Typography = () => (
    <div>
    <h1 className="page-title">Devices<span className="fw-semi-bold"></span></h1>
    <h3 className="page-title">Add Devices</h3>
        <Row>
            <Col xs={12} md={6}>
                <Widget
                    title={<h5>Device Name: <small className="text-muted">Device 1</small></h5>}
                    close collapse >
                    <h4>Device Details</h4>
                    <p></p>
                    <div className="widget-padding-md w-100 h-100 text-left border rounded">
                        <Row>
                            <Col sm={6}>
                                <h3>ID: </h3>
                                <h3>Brand: </h3>
                                <h3>Model: </h3>
                                <h3>Status: </h3>
                                <h3>Firmware: </h3>
                            </Col>
                            <Col sm={6}>
                            <h3>01</h3>
                            <h3>Arduino</h3>
                            <h3>Uno</h3>
                            <h3>Online</h3>
                            <h3>1.4.5.7</h3>
                            </Col>
                        </Row>
                    </div>
                </Widget>
            </Col>
            <Col xs={12} md={6}>
                <Widget
                    title={<h5>Device Name: <small className="text-muted">Device 1</small></h5>}
                    close collapse >
                    <h4>Device Details</h4>
                    <p></p>
                    <div className="widget-padding-md w-100 h-100 text-left border rounded">
                        <Row>
                            <Col sm={6}>
                                <h3>ID: </h3>
                                <h3>Brand: </h3>
                                <h3>Model: </h3>
                                <h3>Status: </h3>
                                <h3>Firmware: </h3>
                            </Col>
                            <Col sm={6}>
                            <h3>02</h3>
                            <h3>Arduino</h3>
                            <h3>Uno</h3>
                            <h3>Online</h3>
                            <h3>1.4.5.7</h3>
                            </Col>
                        </Row>
                    </div>
                </Widget>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={6}>
                <Widget
                    title={<h5>Device Name: <small className="text-muted">Device 1</small></h5>}
                    close collapse >
                    <h4>Device Details</h4>
                    <p></p>
                    <div className="widget-padding-md w-100 h-100 text-left border rounded">
                        <Row>
                            <Col sm={6}>
                                <h3>ID: </h3>
                                <h3>Brand: </h3>
                                <h3>Model: </h3>
                                <h3>Status: </h3>
                                <h3>Firmware: </h3>
                            </Col>
                            <Col sm={6}>
                            <h3>03</h3>
                            <h3>Arduino</h3>
                            <h3>Uno</h3>
                            <h3>Online</h3>
                            <h3>1.4.5.7</h3>
                            </Col>
                        </Row>
                    </div>
                </Widget>
            </Col>
            <Col xs={12} md={6}>
                <Widget
                    title={<h5>Device Name: <small className="text-muted">Device 1</small></h5>}
                    close collapse >
                    <h4>Device Details</h4>
                    <p></p>
                    <div className="widget-padding-md w-100 h-100 text-left border rounded">
                        <Row>
                            <Col sm={6}>
                                <h3>ID: </h3>
                                <h3>Brand: </h3>
                                <h3>Model: </h3>
                                <h3>Status: </h3>
                                <h3>Firmware: </h3>
                            </Col>
                            <Col sm={6}>
                            <h3>04</h3>
                            <h3>Arduino</h3>
                            <h3>Uno</h3>
                            <h3>Online</h3>
                            <h3>1.4.5.7</h3>
                            </Col>
                        </Row>
                    </div>
                </Widget>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={6}>
                <Widget
                    title={<h5>Device Name: <small className="text-muted">Device 1</small></h5>}
                    close collapse >
                    <h4>Device Details</h4>
                    <p></p>
                    <div className="widget-padding-md w-100 h-100 text-left border rounded">
                        <Row>
                            <Col sm={6}>
                                <h3>ID: </h3>
                                <h3>Brand: </h3>
                                <h3>Model: </h3>
                                <h3>Status: </h3>
                                <h3>Firmware: </h3>
                            </Col>
                            <Col sm={6}>
                            <h3>05</h3>
                            <h3>Arduino</h3>
                            <h3>Uno</h3>
                            <h3>Online</h3>
                            <h3>1.4.5.7</h3>
                            </Col>
                        </Row>
                    </div>
                </Widget>
            </Col>
            <Col xs={12} md={6}>
                <Widget
                    title={<h5>Device Name: <small className="text-muted">Device 1</small></h5>}
                    close collapse >
                    <h4>Device Details</h4>
                    <p></p>
                    <div className="widget-padding-md w-100 h-100 text-left border rounded">
                        <Row>
                            <Col sm={6}>
                                <h3>ID: </h3>
                                <h3>Brand: </h3>
                                <h3>Model: </h3>
                                <h3>Status: </h3>
                                <h3>Firmware: </h3>
                            </Col>
                            <Col sm={6}>
                            <h3>06</h3>
                            <h3>Arduino</h3>
                            <h3>Uno</h3>
                            <h3>Online</h3>
                            <h3>1.4.5.7</h3>
                            </Col>
                        </Row>
                    </div>
                </Widget>
            </Col>
        </Row>
    </div>
);

export default Typography;
