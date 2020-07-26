import React from 'react';
import {
  Row,
  Col,
  Table,
  Button,
  Progress,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Input,
  Label,
  Badge,
} from 'reactstrap';
import { Comment, Form } from 'semantic-ui-react'

import Widget from '../../components/Widget';
import s from './TopFirmware.module.scss';
import { retrieveAllAvailableFirmware } from '../../blockchain/contracts';
import { downloadFirmware } from '../../ipfs/client';

class TopFirmware extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tableStyles: [
        {
          id: 5,
          picture: require('../../images/tables/5.png'), // eslint-disable-line global-require
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
      availableFirmware: [],
    };

    this.checkAll = this.checkAll.bind(this);
  }

  componentDidMount() {
    retrieveAllAvailableFirmware().then(af => this.setState({availableFirmware: af}));
    // set el height and width etc.
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
            {this.state.availableFirmware.map(firmware =>
              <Widget
                key={firmware.block}
                title={<h5>Firmware: <small className="text-muted">v1</small></h5>}
                close collapse >
                <p></p>
                <div className="widget-padding-md w-100 h-100 text-left border rounded">
                  <Row>
                    <Col sm={6}>
                      <h3><span className="fw-semi-bold">Firmware ID:</span> </h3>
                      <h3><span className="fw-semi-bold">Developer ID:</span> </h3>
                      <h3><span className="fw-semi-bold">Block Number:</span> </h3>
                      <h3><span className="fw-semi-bold">Firmware Version:</span> </h3>
                      <h3><span className="fw-semi-bold">Number of downloads:</span> </h3>
                      <h3><span className="fw-semi-bold">Trust Rank:</span> </h3>
                      <h4><span className="fw-semi-bold">Description:</span> </h4>
                      <h3>&nbsp;</h3>
                      <Button type="submit" color="success" className="auth-btn" size="sm" style={{ color: '#fff' }}
                              onClick={() => downloadFirmware(firmware.IPFS_link, 'firmware')}>
                        {
                          'Download Firmware'
                        }
                      </Button>
                      <h3>&nbsp;</h3>
                      <h3>&nbsp;</h3>
                    </Col>
                    <Col sm={6}>
                      <h3>{firmware.hash}</h3>
                      <h3>{firmware.developer}</h3>
                      <h3>{firmware.block}</h3>
                      <h3>NOT_YET_IMPL</h3>
                      <h3>NOT_YET_IMPL</h3>
                      <h3>NOT_YET_IMPL</h3>
                      <h4>{firmware.description}</h4>
                      <h3>&nbsp;</h3>

                      <Button type="submit" color="danger" className="auth-btn" size="sm" style={{ color: '#fff' }}>
                        {
                          'Donate to Developer'
                        }
                      </Button>
                      <h3>&nbsp;</h3>
                      <h3>&nbsp;</h3>

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
                              <Button type="submit" color="warning" className="auth-btn" size="sm" style={{ color: '#fff' }}>
                                {
                                  'Submit Reply'
                                }
                              </Button>
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
                              <Button type="submit" color="warning" className="auth-btn" size="sm" style={{ color: '#fff' }}>
                                {
                                  'Post Comment'
                                }
                              </Button>
                            </Form>
                          </Comment.Content>
                        </Comment>
                      </Comment.Group>
                    </Col>
                  </Row>
                </div>
              </Widget>)}
          </Col>


</Row>
</div>
    );
  }

}

export default TopFirmware;
