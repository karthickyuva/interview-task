import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import CreatePoll from "./CreatePoll";
import PollDetails from "./PollDetails";
import './App.css';

class App extends Component {
    render() {
	  return (
		  <Container>
			  <Row>
				  <Col className="p-3" sm="12">
					  <h2>VOTING APP</h2>
				  </Col>
			  </Row>
			    <Router>
				    <div>
					    <Route exact path="/poll" component={CreatePoll} />
					    <Route path="/poll/:id" component={PollDetails} />
				    </div>
			    </Router>
		  </Container>
    );
  }
}

export default App;
