import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Button, Form, FormGroup, Input } from 'reactstrap';
import { Chart } from "react-google-charts";

class PollDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			votingResults: localStorage.getItem("votingResults") ? JSON.parse(localStorage.getItem("votingResults")) : []
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
	    this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
	    e.preventDefault();

	    const votingResults = localStorage.getItem("votingResults") ? JSON.parse(localStorage.getItem("votingResults")) : [];
	    votingResults.push({
		    party: this.state.party
	    });
	    this.setState({
		    votingResults
	    }, () => localStorage.setItem("votingResults", JSON.stringify(votingResults)));
    }

    render() {
	    const {
		    match: { params },
	    } = this.props;
	    const votingPolls = JSON.parse(localStorage.getItem("votingPolls"));
	    const votingResults = this.state.votingResults;
	    let results = [];
	    votingResults.forEach((votingResult) => {
	    	results.push(votingResult.party)
		    });

	    function count() {
		    results.sort();

		    let current = null;
		    let cnt = 0;
		    for (let i = 0; i < results.length; i++) {
			    if (results[i] !== current) {
				    if (cnt > 0) {
					    localStorage.setItem(current, JSON.stringify(cnt));
				    }
				    current = results[i];
				    cnt = 1;
			    } else {
				    cnt++;
			    }
		    }
		    if (cnt > 0) {
			    localStorage.setItem(current, JSON.stringify(cnt));
		    }

	    }
	    count();

	  return (
		  <Row>
			  <Col sm={{size: 12}}>
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
										  <Input required type="select" name="party" id="party"
										         onChange={this.handleChange} placeholder="Select Party">
											  <option value="">Select Party</option>
											  <option>Congress</option>
											  <option>BJP</option>
											  <option>Trinamool Congress</option>
											  <option>Communist</option>
											  <option>Aam Aadmi Party</option>
										  </Input>
									  </FormGroup>
									  <Button type="submit" color="primary">Submit</Button>
								  </Form>
							  </Col>
							  <Col sm={{size: 6}}>
								  <h6>Voting Percentage</h6>
								  <Chart
									  width={'500px'}
									  height={'300px'}
									  chartType="PieChart"
									  loader={<div>Loading Chart</div>}
									  data={[
										  ['Voting', 'Voting Results'],
										  ['Congress', parseInt(localStorage.getItem("Congress"))],
										  ['BJP', parseInt(localStorage.getItem("BJP"))],
										  ['Trinamool Congress', parseInt(localStorage.getItem("Trinamool Congress"))],
										  ['Communist', parseInt(localStorage.getItem("Communist"))],
										  ['Aam Aadmi Party', parseInt(localStorage.getItem("Aam Aadmi Party"))],
									  ]}
									  options={{
										  is3D: true,
									  }}
									  rootProps={{ 'data-testid': '1' }}
								  />
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
