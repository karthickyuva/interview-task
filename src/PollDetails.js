import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button, Form, FormGroup, Input } from 'reactstrap';
import './App.css';

class PollDetails extends Component {
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
	  return (
		  <Row>
			  <Col sm={{size: 8, order: 2, offset: 1}}>
				  <Card className="p-2">
					  <CardBody className="text-left">
						  <h3>Poll Title</h3>
						  <Col sm={{size: 8}}>
							  <p>I would like to Vote for:</p>
							  <Form onSubmit={this.handleSubmit} ref="form">
								  <FormGroup>
									  <Input type="select" name="pollOptions" id="pollOptions"
									         onChange={this.handleChange} placeholder="Select Party">
										  <option>Congress</option>
										  <option>BJP</option>
										  <option>Indian National Congress</option>
										  <option>Nota</option>
									  </Input>
								  </FormGroup>
								  <Button type="submit" color="primary">Submit</Button>
							  </Form>
						  </Col>
					  </CardBody>
				  </Card>
			  </Col>
		  </Row>
    );
  }
}

export default PollDetails;
