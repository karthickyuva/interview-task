import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button, Form, FormGroup, Label, Input, Table, Badge } from 'reactstrap';
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
	    votingPolls.push(this.state);
	    this.setState({
		    votingPolls
	    }, () => localStorage.setItem("votingPolls", JSON.stringify(votingPolls)));
    }

    render() {
	  const votingPolls = this.state.votingPolls;

	  return (
		  <Row>
			  <Col sm={{size: 8, order: 2, offset: 1}}>
				  <Card className="p-2">
					  <CardBody className="text-left">
						  <h3>Make a new POLL:</h3>
						  <Col sm={{size: 8}}>
							  <Form onSubmit={this.handleSubmit} ref="form">
								  <FormGroup>
									  <Label for="pollTitle">Title:</Label>
									  <Input type="text" name="pollTitle" id="pollTitle"
									         onChange={this.handleChange} placeholder="Poll title"/>
								  </FormGroup>
								  ​
								  <FormGroup>
									  <Label for="pollOptions">Options</Label>
									  <Input type="select" name="pollOptions" id="pollOptions"
									         onChange={this.handleChange} placeholder="Select">
										  <option>Congress</option>
										  <option>BJP</option>
										  <option>Indian National Congress</option>
										  <option>Nota</option>
									  </Input>
								  </FormGroup>
								  <Button type="submit" color="primary">Create</Button>
							  </Form>
						  </Col>
					  </CardBody>
				  </Card>
			  </Col>
			  ​
			  <Col className="mt-3" sm={{size: 8, order: 2, offset: 1}}>
				  <Card className="p-2">
					  <CardBody className="text-left">
						  <h3>Polls List:</h3>
						  <Col sm={{size: 8}}>
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
								  {votingPolls.map((votingPoll, key) => <tr key={key}>
									  <td>{key + 1}</td>
									  <td>
										  {votingPoll.pollTitle}
									  </td>
									  <td>
										  <Link to={`/poll/${key + 1}`}>
											  <Badge glyph="align-left">View</Badge>
										  </Link>
									  </td>
									  <td>
										  <Badge glyph="align-left">Delete</Badge>
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
