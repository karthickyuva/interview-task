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
			  <Col sm={{size: 8, order: 2, offset: 2}}>
				  <Card className="p-2">
					  <CardBody className="text-left">
						  <Row>
							  <Col>
								  {votingPolls.map((votingPoll, key) =>
									  parseInt(params.id) === key + 1 ?
										  <h3 className="mb-3">{votingPoll.pollTitle}</h3> : ""
								  )}
							  </Col>
						  </Row>
						  <Row>
							  <Col sm={{size: 6}}>
								  <h6>I would like to Vote for:</h6>
								  <Form onSubmit={this.handleSubmit} ref="form">
									  <FormGroup>
										  <Input required type="select" name="pollOptions" id="pollOptions"
										         onChange={this.handleChange} placeholder="Select Party">
											  <option value="">Select Party</option>
											  <option>Congress</option>
											  <option>BJP</option>
											  <option>Indian National Congress</option>
											  <option>NOTA</option>
										  </Input>
									  </FormGroup>
									  <Button type="submit" color="primary">Submit</Button>
								  </Form>
							  </Col>
							  <Col sm={{size: 6}}>
								  <h6>Voting Percentage</h6>
							  </Col>
						  </Row>
					  </CardBody>
				  </Card>
			  </Col>
		  </Row>
    );
  }
}

export default PollDetails;
