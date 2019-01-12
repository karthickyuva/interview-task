import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import CreatePoll from "./CreatePoll";
import PollDetails from "./PollDetails";
import { Link } from "react-router-dom";
import './App.css';

class App extends Component {
    render() {
	  return (
		  <Container>
			    <Router>
				    <div>
					    <Row>
						    <Col className="p-3" sm="12">
							    <h1><Link className="text-decoration-none" to="/">VOTING APP</Link></h1>
						    </Col>
					    </Row>
					    <Route exact path="/" component={CreatePoll} />
					    <Route path="/poll/:id" component={PollDetails} />
				    </div>
			    </Router>
		  </Container>
    );
  }
}

export default App;
