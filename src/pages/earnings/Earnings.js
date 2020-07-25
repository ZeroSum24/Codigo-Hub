import React from 'react';

import { Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row, Table } from 'reactstrap';

import Widget from '../../components/Widget';

import s from './Earnings.module.scss';
import { chartData, liveChart, liveChartInterval } from './mock';
import Rickshaw from './rickshaw/Rickshaw';

import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/themeRiver';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';

import Highcharts from 'highcharts';
import exporting from 'highcharts/modules/exporting';
import exportData from 'highcharts/modules/export-data';
import BalanceSheet from '../filecoin/balance';
import CreateFilecoinAddressDialog from '../filecoin/createAddress';
import { getPowerGateInfo } from '../../filecoin/client';

exporting(Highcharts);
exportData(Highcharts);

class Earnings extends React.Component {
	state = {
		cd: chartData,
		ld: liveChart,
		dropdownOpen: false,
		dropdownOpen2: false,
		initEchartsOptions: {
			renderer: 'canvas'
		},
    showCreate: false,
		sparklineData: {
			series: [ { data: [ 1, 7, 3, 5, 7, 8 ] } ],
			options1: {
				colors: [ '#ffc247' ],
				plotOptions: {
					bar: {
						columnWidth: '50%'
					}
				}
			},
			options2: {
				colors: [ '#ffc0d9' ],
				plotOptions: {
					bar: {
						columnWidth: '50%'
					}
				}
			}
		}
	};

	toggle = () => this.setState({ dropdownOpen: !this.state.dropdownOpen });
	toggle2 = () => this.setState({ dropdownOpen2: !this.state.dropdownOpen2 });

	onCloseCreateDialog = () => {
	  this.setState({showCreate: false});
  }

	componentWillUnmount() {
		clearInterval(liveChartInterval);
	}

	componentDidMount = () => {
	  this._refresh();
  }

  _refresh = async () => {
    const newInfo = await getPowerGateInfo();
    this.setState({balancesList: newInfo.info.balancesList });
  };


	render() {
		return (
			<Container fluid={true}>
				<div>
          <h1 className="page-title" style={{display: 'inline', paddingRight: '10px'}}>Filecoin Wallets</h1>
          <i className="fa fa-plus-circle" style={{fontSize: '24px', paddingRight: '10px'}} title="Add new device" aria-hidden="true" onClick={() => this.setState({showCreate: true})}/>
          <i className="fa fa-refresh" style={{ fontSize: '24px' }} title="Refresh device status" onClick={this._refresh} aria-hidden="true"/>
          <Col>
            <CreateFilecoinAddressDialog show={this.state.showCreate} onClose={this.onCloseCreateDialog} />
            <BalanceSheet balancesList={this.state.balancesList} />
          </Col>
					<h1 className="page-title">
						Firmware <span className="fw-semi-bold">Earnings</span>
					</h1>{' '}
					<Col>
						<Widget
							title={
								<h6>
									{' '}
									Firmware <span className="fw-semi-bold">Net Earnings</span>
								</h6>
							}
							close
						>
							<div className="widget-body">
								<h3>$720 Earned</h3>
								<p className="fs-mini text-muted mb mt-sm">
									Target <span className="fw-semi-bold">$820</span> day earnings is{' '}
									<span className="fw-semi-bold">96%</span> reached.
								</p>
							</div>
							<div style={{ paddingBottom: '40px' }} className={`widget-table-overflow ${s.table}`}>
								<Table striped size="sm">
									<thead className="no-bd">
										<tr>
											<th />
											<th>&nbsp;</th>
											<th>&nbsp;</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td />
											<td>Earnings Last 7 days : </td>
											<td className="text-align-right fw-semi-bold">$100.10</td>
										</tr>
										<tr>
											<td />
											<td>Earnings Last 30 days : </td>
											<td className="text-align-right fw-semi-bold">$500.10</td>
										</tr>
										<tr>
											<td />
											<td>Earnings Last 90 days : </td>
											<td className="text-align-right fw-semi-bold">$1000.10</td>
										</tr>
									</tbody>
								</Table>
							</div>
							<Row xs="2">
								<Col sm={{ size: 'auto', offset: 1 }}>
									{' '}
									<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
										<DropdownToggle color="primary">Select Firmware</DropdownToggle>
										<DropdownMenu>
											<DropdownItem>Firmware v1</DropdownItem>
											<DropdownItem>Firmware v2</DropdownItem>
											<DropdownItem>Firmware v3</DropdownItem>
											<DropdownItem>Firmware v4</DropdownItem>
											<DropdownItem>Firmware v5</DropdownItem>
										</DropdownMenu>
									</Dropdown>
								</Col>
								<Col
									sm={{ size: 'auto', offset: 1 }}
									md={{ size: 'auto', offset: 3 }}
									lg={{ size: 'auto', offset: 5 }}
								>
									{' '}
									<Dropdown isOpen={this.state.dropdownOpen2} toggle={this.toggle2}>
										<DropdownToggle color="primary">Select Durations</DropdownToggle>
										<DropdownMenu>
											<DropdownItem>7 Days</DropdownItem>
											<DropdownItem>30 Days</DropdownItem>
											<DropdownItem>90 Days</DropdownItem>
										</DropdownMenu>
									</Dropdown>
								</Col>
							</Row>

							<div className="widget-body mt-xlg chart-overflow-bottom" style={{ height: '100px' }}>
								<Rickshaw height={100} />
							</div>
						</Widget>
					</Col>
				</div>
			</Container>
		);
	}
}

export default Earnings;
