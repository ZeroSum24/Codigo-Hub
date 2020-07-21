import React from 'react';
import Markdown from 'markdown-to-jsx';

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
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter
} from 'reactstrap';

import { Comment, Form } from 'semantic-ui-react';
import { Container, Header, List } from "semantic-ui-react";
import { Sparklines, SparklinesBars } from 'react-sparklines';

import Widget from '../../../components/Widget';
import s from './Static.module.scss';
import Example from './example';
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
						dimensions: '1452x1320'
					},
					date: new Date('October 1, 2012'),
					size: '2.3 MB',
					progress: {
						percent: 41,
						colorClass: 'primary'
					}
				}
			],
			checkboxes1: [ false, true, false, false ],
			checkboxes2: [ false, false, false, false, false, false ],
			checkboxes3: [ false, false, false, false, false, false ],
			modal: false
		};

		this.checkAll = this.checkAll.bind(this);
	}
	toggle = () => this.setState({ modal: !this.state.modal });
	closeBtn = (
		<button className="close" onClick={this.toggle}>
			&times;
		</button>
	);

	parseDate(date) {
		this.dateSet = date.toDateString().split(' ');

		return `${date.toLocaleString('en-us', { month: 'long' })} ${this.dateSet[2]}, ${this.dateSet[3]}`;
	}

	checkAll(ev, checkbox) {
		const checkboxArr = new Array(this.state[checkbox].length).fill(ev.target.checked);
		this.setState({
			[checkbox]: checkboxArr
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
			[checkbox]: this.state[checkbox]
		});
	}

	render() {
		return (
			<div>
				<Modal isOpen={this.state.modal} toggle={this.toggle}>
					<ModalHeader toggle={this.toggle} close={this.closeBtn}>
						Source Code
					</ModalHeader>
					<ModalBody>
						<Markdown>
							``` Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
							in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
							sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
							laborum. ```
						</Markdown>
					</ModalBody>
					<ModalFooter>
						<Button color="success" onClick={this.toggle}>
							Copy
						</Button>{' '}
						<Button color="primary" onClick={this.toggle}>
							Cancel
						</Button>
					</ModalFooter>
				</Modal>
				<Row>
					<Col xs={12} md={6}>
						<Widget
							title={
								<h5>
									Firmware: <small className="text-muted">v1</small>
								</h5>
							}
							close
							collapse
						>
							<p />
							<div className="widget-padding-md w-100 h-100 text-left border rounded">
								<Row>
									<Col sm={6}>
										<h3>
											<span className="fw-semi-bold">Firmware ID:</span>{' '}
										</h3>
										<h3>
											<span className="fw-semi-bold">Developer ID:</span>{' '}
										</h3>
										<h3>
											<span className="fw-semi-bold">Block Number:</span>{' '}
										</h3>
										<h3>
											<span className="fw-semi-bold">Firmware Version:</span>{' '}
										</h3>
										<h3>
											<span className="fw-semi-bold">Number of downloads:</span>{' '}
										</h3>
										<h3>
											<span className="fw-semi-bold">Trust Rank:</span>{' '}
										</h3>
										<h4>
											<span className="fw-semi-bold">Description:</span>{' '}
										</h4>
										<h3>&nbsp;</h3>

										<Button
											color="primary"
											className="auth-btn"
											size="sm"
											style={{ color: '#fff' }}
											onClick={this.toggle}
											style={{ marginBottom: '20px' }}
										>
											Display Source Code
										</Button>

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
                          <h3><span className="fw-semi-bold">Firmware ID:</span> </h3>
                          <h3><span className="fw-semi-bold">Developer ID:</span> </h3>
                          <h3><span className="fw-semi-bold">Block Number:</span> </h3>
                          <h3><span className="fw-semi-bold">Firmware Version:</span> </h3>
                          <h3><span className="fw-semi-bold">Number of downloads:</span> </h3>
                          <h3><span className="fw-semi-bold">Trust Rank:</span> </h3>
                          <h4><span className="fw-semi-bold">Description:</span> </h4>
                          <h3>&nbsp;</h3>
                          <Button type="submit" color="success" className="auth-btn" size="sm" style={{ color: '#fff' }}>
                            {
                              'Download Firmware'
                            }
                          </Button>
                          <h3>&nbsp;</h3>
                          <h3>&nbsp;</h3>
                      </Col>
                      <Col sm={6}>
                      <h3>01</h3>
                      <h3>01</h3>
                      <h3>01</h3>
                      <h3>v1</h3>
                      <h3>300</h3>
                      <h3>678</h3>
                      <h4>Description</h4>
                      <h3>&nbsp;</h3>

                      <Button type="submit" color="danger" className="auth-btn" size="sm" style={{ color: '#fff' }}>
                        {
                          'Donate to developer'
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
              </Widget>
          </Col>


</Row>
</div>
    );
  }
										<Button
											type="submit"
											color="danger"
											className="auth-btn"
											size="sm"
											style={{ color: '#fff' }}
										>
											{'Donate to developer'}
										</Button>
										<h3>&nbsp;</h3>
										<h3>&nbsp;</h3>
									</Col>
									<Col>
										<Comment.Group>
											<Comment>
												<Comment.Avatar
													as="a"
													src="https://react.semantic-ui.com/images/avatar/small/steve.jpg"
												/>
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
															type="submit"
															color="warning"
															className="auth-btn"
															size="sm"
															style={{ color: '#fff' }}
														>
															{'Submit Reply'}
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
													<Comment.Metadata />
													<Comment.Actions>
														<Comment.Action active>New Comment</Comment.Action>
													</Comment.Actions>
													<Form reply>
														<Form.TextArea />
														<Button
															type="submit"
															color="warning"
															className="auth-btn"
															size="sm"
															style={{ color: '#fff' }}
														>
															{'Post Comment'}
														</Button>
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
