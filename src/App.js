import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreatePoll from "./CreatePoll";
import PollDetails from "./PollDetails";
import './App.css';

class App extends Component {
    render() {
	  return (
	    <div className="App">
		    <Router>
			    <div>
				    <Route exact path="/poll" component={CreatePoll} />
				    <Route path="/poll/:id" component={PollDetails} />
			    </div>
		    </Router>
	    </div>
    );
  }
}

export default App;
