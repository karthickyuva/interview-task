import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button, Form, FormGroup, Input } from 'reactstrap';

class PollDetails extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
	    this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
	    e.preventDefault();
    }

    render() {
	    const {
		    match: { params },
	    } = this.props;
	    const votingPolls = JSON.parse(localStorage.getItem("votingPolls"));

	  return (
		  <Row>
			  <Col sm={{size: 8, order: 2, offset: 1}}>
				  <Card className="p-2">
					  <CardBody className="text-left">
						  {votingPolls.map((votingPoll, key) =>
						  parseInt(params.id) === key + 1 ?
							  <h3>{votingPoll.pollTitle}</h3> : ""
						  )}
						  <Col sm={{size: 8}}>
							  <p>I would like to Vote for:</p>
							  <Form onSubmit={this.handleSubmit} ref="form">
								  <FormGroup>
									  <Input type="select" name="pollOptions" id="pollOptions"
									         onChange={this.handleChange} placeholder="Select Party">
										  <option>Select Party</option>
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
