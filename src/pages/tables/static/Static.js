import React from 'react';
import {
  Row,
  Col,
  Table,
  Progress,
  Button,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Input,
  Label,
  Badge,
} from 'reactstrap';
import { Sparklines, SparklinesBars } from 'react-sparklines';

import Widget from '../../../components/Widget';
import s from './Static.module.scss';

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
      <div className={s.root}>
        <h2 className="page-title">Device Status <span className="fw-semi-bold"></span></h2>
        <Row>
          <Col>

          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Widget
              title={<h5><span className="fw-semi-bold"></span></h5>} settings close>
              <Table className="table-striped">
              </Table>
              <br /><br />
              <p>{'The status of each device'}<code></code></p>
              <div className="table-responsive">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  {/* eslint-disable */}
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Arduino A</td>
                      <td><Badge color="success" className="text-secondary" pill>Online</Badge></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Arduino B</td>
                      <td><Badge color="success" className="text-secondary" pill>Online</Badge></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Arduino C</td>
                      <td><Badge color="success" className="text-secondary" pill>Online</Badge></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Arduino D</td>
                      <td><Badge color="success" className="text-secondary" pill>Online</Badge></td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Arduino E</td>
                      <td><Badge color="success" className="text-secondary" pill>Online</Badge></td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Arduino F</td>
                      <td><Badge color="success" className="text-secondary" pill>Online</Badge></td>
                    </tr>
                  </tbody>
                  {/* eslint-enable */}
                </Table>
              </div>
            </Widget>
          </Col>
          <Col lg={6}>
          </Col>
        </Row>
      </div>
    );
  }

}

export default Static;
