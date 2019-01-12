import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';
import { Link } from "react-router-dom";
import './App.css';

class CreatePoll extends Component {
	constructor(props) {
		super(props);
		this.state = {
			votingPolls: localStorage.getItem("votingPolls") ? JSON.parse(localStorage.getItem("votingPolls")) : []
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({[e.target.name]: e.target.value});
	}

	handleSubmit(e) {
		e.preventDefault();
		const votingPolls = localStorage.getItem("votingPolls") ? JSON.parse(localStorage.getItem("votingPolls")) : [];
		votingPolls.push({
			pollTitle: this.state.pollTitle,
			customParty: this.state.customParty
		});
		this.setState({
			votingPolls
		}, () => localStorage.setItem("votingPolls", JSON.stringify(votingPolls)));
	}

	removeItem(index){
		let votingPolls = this.state.votingPolls;

		votingPolls = votingPolls.splice(index + 1, 1);

		this.setState({
			votingPolls
		}, () => localStorage.setItem("votingPolls", JSON.stringify(votingPolls)));
	}

	render() {
		const votingPolls = this.state.votingPolls;

		return (
			<Row>
				<Col sm={{size: 8, order: 2, offset: 2}}>
					<Card className="p-2">
						<CardBody className="text-left">
							<h3 className="mb-3">Make a new POLL:</h3>
							<Col sm={{size: 12}}>
								<Form onSubmit={this.handleSubmit} ref="form">
									<FormGroup className="mb-0">
										<Label for="pollTitle">Title<span className="required">*</span></Label>
										<Input required type="text" name="pollTitle" id="pollTitle"
										       onChange={this.handleChange} placeholder="Poll Title"/>
									</FormGroup>
									​
									<FormGroup>
										<Label for="customParty">Options</Label>
										<Input type="text" name="customParty" id="customParty"
										       onChange={this.handleChange} placeholder="Create Optional Party">
										</Input>
									</FormGroup>
									<Button type="submit" color="primary">Create</Button>
								</Form>
							</Col>
						</CardBody>
					</Card>
				</Col>
				​
				<Col className="mt-3" sm={{size: 8, order: 2, offset: 2}}>
					<Card className="p-2">
						<CardBody className="text-left">
							<h3 className="mb-3">Polls List:</h3>
							<Col sm={{size: 12}}>
								<Table>
									<thead>
									<tr>
										<th>#</th>
										<th>Poll Title</th>
										<th>View</th>
										<th>Remove</th>
									</tr>
									</thead>
									<tbody>
									{votingPolls.length === 0 && <tr><td className="text-center" colSpan={4}>No polls found</td></tr>}
									{votingPolls.map((votingPoll, key) => <tr key={key}>
										<td>{key + 1}</td>
										<td>
											{votingPoll.pollTitle}
										</td>
										<td>
											<Link to={`/poll/${key + 1}`}>
												<Button glyph="align-left">View</Button>
											</Link>
										</td>
										<td>
											<Button onClick={this.removeItem.bind(this, key)} glyph="align-left">Delete</Button>
										</td>
									</tr>)}
									</tbody>
								</Table>
							</Col>
						</CardBody>
					</Card>
				</Col>
			</Row>
		);
	}
}

export default CreatePoll;
