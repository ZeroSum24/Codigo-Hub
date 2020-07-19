import React from 'react';
import {
  Row,
  Col,
  Table,
  Progress,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Input,
  Label,
  Badge,
} from 'reactstrap';
import { Button, Comment, Form } from 'semantic-ui-react'

import { Container, Header, List } from "semantic-ui-react";
import { Sparklines, SparklinesBars } from 'react-sparklines';

import Widget from '../../../components/Widget';
import s from './Static.module.scss';
import Example from "./example";

class Static extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tableStyles: [
        {
          id: 5,
          picture: require('../../../images/tables/5.png'), // eslint-disable-line global-require
          description: 'Fortress',
          info: {
            type: 'JPEG',
            dimensions: '1452x1320',
          },
          date: new Date('October 1, 2012'),
          size: '2.3 MB',
          progress: {
            percent: 41,
            colorClass: 'primary',
          },
        },
      ],
      checkboxes1: [false, true, false, false],
      checkboxes2: [false, false, false, false, false, false],
      checkboxes3: [false, false, false, false, false, false],
    };

    this.checkAll = this.checkAll.bind(this);
  }

  parseDate(date) {
    this.dateSet = date.toDateString().split(' ');

    return `${date.toLocaleString('en-us', { month: 'long' })} ${this.dateSet[2]}, ${this.dateSet[3]}`;
  }

  checkAll(ev, checkbox) {
    const checkboxArr = (new Array(this.state[checkbox].length)).fill(ev.target.checked);
    this.setState({
      [checkbox]: checkboxArr,
    });
  }

  changeCheck(ev, checkbox, id) {
    //eslint-disable-next-line
    this.state[checkbox][id] = ev.target.checked;
    if (!ev.target.checked) {
      //eslint-disable-next-line
      this.state[checkbox][0] = false;
    }
    this.setState({
      [checkbox]: this.state[checkbox],
    });
  }

  render() {
    return (
      <div>

      <Row>
          <Col xs={12} md={6}>
              <Widget
                  title={<h5>Firmware: <small className="text-muted">v1</small></h5>}
                  close collapse >
                  <p></p>
                  <div className="widget-padding-md w-100 h-100 text-left border rounded">
                  <Row>
                      <Col sm={6}>
                          <h3>ID: </h3>
                          <h3>Firmware Version: </h3>
                      </Col>
                      <Col sm={6}>
                      <h3>01</h3>
                      <h3>v1</h3>
                      </Col>
                      <Col>
                      <Comment.Group>
                        <Comment>
                          <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/steve.jpg' />
                          <Comment.Content>
                            <Comment.Metadata>
                              <div>2 days ago</div>
                            </Comment.Metadata>
                            <Comment.Text>Revolutionary!</Comment.Text>
                            <Comment.Actions>
                              <Comment.Action active>Reply</Comment.Action>
                            </Comment.Actions>
                            <Form reply>
                              <Form.TextArea />
                              <Button
                                content='Add Reply'
                                labelPosition='left'
                                icon='edit'
                                primary
                              />
                            </Form>
                          </Comment.Content>
                        </Comment>
                      </Comment.Group>
                      </Col>
                      <Col>
                      <Comment.Group>
                        <Comment>
                          <Comment.Content>
                            <Comment.Metadata>
                            </Comment.Metadata>
                            <Comment.Actions>
                              <Comment.Action active>New Comment</Comment.Action>
                            </Comment.Actions>
                            <Form reply>
                              <Form.TextArea />
                              <Button
                                content='Add Comment'
                                labelPosition='left'
                                icon='edit'
                                primary
                              />
                            </Form>
                          </Comment.Content>
                        </Comment>
                      </Comment.Group>
                      </Col>
                  </Row>
                  </div>
              </Widget>
          </Col>
          <Col xs={12} md={6}>
              <Widget
              title={<h5>Firmware: <small className="text-muted">v2</small></h5>}
              close collapse >
              <p></p>
              <div className="widget-padding-md w-100 h-100 text-left border rounded">
              <Row>
                  <Col sm={6}>
                      <h3>ID: </h3>
                      <h3>Firmware Version: </h3>
                  </Col>
                  <Col sm={6}>
                  <h3>02</h3>
                  <h3>v2</h3>
                  </Col>
                  <Col>
                  <Comment.Group>
                    <Comment>
                      <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                      <Comment.Content>
                        <Comment.Metadata>
                          <div>3 days ago</div>
                        </Comment.Metadata>
                        <Comment.Text>Small issue on boot</Comment.Text>
                        <Comment.Actions>
                          <Comment.Action active>Reply</Comment.Action>
                        </Comment.Actions>
                        <Form reply>
                          <Form.TextArea />
                          <Button
                            content='Add Reply'
                            labelPosition='left'
                            icon='edit'
                            primary
                          />
                        </Form>
                      </Comment.Content>
                    </Comment>
                  </Comment.Group>
                  </Col>
                  <Col>
                  <Comment.Group>
                    <Comment>
                      <Comment.Content>
                        <Comment.Metadata>
                        </Comment.Metadata>
                        <Comment.Actions>
                          <Comment.Action active>New Comment</Comment.Action>
                        </Comment.Actions>
                        <Form reply>
                          <Form.TextArea />
                          <Button
                            content='Add Comment'
                            labelPosition='left'
                            icon='edit'
                            primary
                          />
                        </Form>
                      </Comment.Content>
                    </Comment>
                  </Comment.Group>
                  </Col>
              </Row>
              </div>
              </Widget>
          </Col>

          <Col xs={12} md={6}>
              <Widget
              title={<h5>Firmware: <small className="text-muted">v3</small></h5>}
              close collapse >
              <p></p>
              <div className="widget-padding-md w-100 h-100 text-left border rounded">
              <Row>
                  <Col sm={6}>
                      <h3>ID: </h3>
                      <h3>Firmware Version: </h3>
                  </Col>
                  <Col sm={6}>
                  <h3>03</h3>
                  <h3>v3</h3>
                  </Col>
                  <Col>
                  <Comment.Group>
                    <Comment>
                      <Comment.Content>
                        <Comment.Metadata>
                        </Comment.Metadata>
                        <Comment.Actions>
                          <Comment.Action active>New Comment</Comment.Action>
                        </Comment.Actions>
                        <Form reply>
                          <Form.TextArea />
                          <Button
                            content='Add Comment'
                            labelPosition='left'
                            icon='edit'
                            primary
                          />
                        </Form>
                      </Comment.Content>
                    </Comment>
                  </Comment.Group>
                  </Col>
              </Row>
              </div>
              </Widget>
          </Col>
      <Col xs={12} md={6}>
          <Widget
          title={<h5>Firmware: <small className="text-muted">v4</small></h5>}
          close collapse >
          <p></p>
          <div className="widget-padding-md w-100 h-100 text-left border rounded">
          <Row>
              <Col sm={6}>
                  <h3>ID: </h3>
                  <h3>Firmware Version: </h3>
              </Col>
              <Col sm={6}>
              <h3>04</h3>
              <h3>v4</h3>
              </Col>
              <Col>
              <Comment.Group>
                <Comment>
                  <Comment.Content>
                    <Comment.Metadata>
                    </Comment.Metadata>
                    <Comment.Actions>
                      <Comment.Action active>New Comment</Comment.Action>
                    </Comment.Actions>
                    <Form reply>
                      <Form.TextArea />
                      <Button
                        content='Add Comment'
                        labelPosition='left'
                        icon='edit'
                        primary
                      />
                    </Form>
                  </Comment.Content>
                </Comment>
              </Comment.Group>
              </Col>
          </Row>
          </div>
          </Widget>
      </Col>

  <Col xs={12} md={6}>
      <Widget
      title={<h5>Firmware: <small className="text-muted">v5</small></h5>}
      close collapse >
      <p></p>
      <div className="widget-padding-md w-100 h-100 text-left border rounded">
      <Row>
          <Col sm={6}>
              <h3>ID: </h3>
              <h3>Firmware Version: </h3>
          </Col>
          <Col sm={6}>
          <h3>05</h3>
          <h3>v5</h3>
          </Col>
          <Col>
          <Comment.Group>
            <Comment>
              <Comment.Content>
                <Comment.Metadata>
                </Comment.Metadata>
                <Comment.Actions>
                  <Comment.Action active>New Comment</Comment.Action>
                </Comment.Actions>
                <Form reply>
                  <Form.TextArea />
                  <Button
                    content='Add Comment'
                    labelPosition='left'
                    icon='edit'
                    primary
                  />
                </Form>
              </Comment.Content>
            </Comment>
          </Comment.Group>
          </Col>
      </Row>
      </div>
      </Widget>
  </Col>
</Row>
</div>
    );
  }

}

export default Static;
