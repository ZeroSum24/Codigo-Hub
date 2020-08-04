import React from 'react';
import {Row, Col} from 'reactstrap';
import Widget from '../../components/Widget';
import Map from './components/am4chartMap/am4chartMap';
import s from './Dashboard.module.scss';

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			graph: null,
			checkedArr: [ false, false, false ]
		};
		this.checkTable = this.checkTable.bind(this);
	}

	checkTable(id) {
		let arr = [];
		if (id === 0) {
			const val = !this.state.checkedArr[0];
			for (let i = 0; i < this.state.checkedArr.length; i += 1) {
				arr[i] = val;
			}
		} else {
			arr = this.state.checkedArr;
			arr[id] = !arr[id];
		}
		if (arr[0]) {
			let count = 1;
			for (let i = 1; i < arr.length; i += 1) {
				if (arr[i]) {
					count += 1;
				}
			}
			if (count !== arr.length) {
				arr[0] = !arr[0];
			}
		}
		this.setState({
			checkedArr: arr
		});
	}

	render() {
		return (
			<div className={s.root}>
				<h1 align="centre" className="page-title">
					Dashboard &nbsp;
					<small>
						<small />
					</small>
				</h1>
				<Row>
					<Col lg={9}>
						<Widget className="bg-transparent">
							<Map />
						</Widget>
					</Col>
					<Col lg={1} />
				</Row>
				<Row />
			</div>
		);
	}
}

export default Dashboard;
