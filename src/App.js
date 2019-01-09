import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
	      <Container>
		      <Row>
			      <Col className="p-3" sm="12">
				      <h2>VOTING APP</h2>
			      </Col>
			      <Col sm={{ size: 8, order: 2, offset: 1 }}>
				      <Card className="p-2">
					      <CardBody className="text-left">
						      <h3>Make a new POLL:</h3>
						      <Col sm={{ size: 8 }}>
							      <Form>
								      <FormGroup>
									      <Label for="pollTitle">Title:</Label>
									      <Input type="text" name="pollTitle" id="pollTitle" placeholder="Poll title" />
								      </FormGroup>

								      <FormGroup>
									      <Label for="pollOptions">Options</Label>
									      <Input type="options" name="pollOptions" id="pollOptions" placeholder="Select">
										      <option>1</option>
										      <option>2</option>
										      <option>3</option>
										      <option>4</option>
										      <option>5</option>
									      </Input>
								      </FormGroup>
								      <Button color="primary">Create</Button>
							      </Form>
						      </Col>
					      </CardBody>
				      </Card>
			      </Col>

			      <Col className="mt-3" sm={{ size: 8, order: 2, offset: 1 }}>
				      <Card className="p-2">
					      <CardBody className="text-left">
						      <h3>Polls List:</h3>
						      <Col sm={{ size: 8 }}>
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
								      <tr>
									      <th scope="row">1</th>
									      <td>Mark</td>
									      <td>Otto</td>
									      <td>@mdo</td>
								      </tr>
								      <tr>
									      <th scope="row">2</th>
									      <td>Jacob</td>
									      <td>Thornton</td>
									      <td>@fat</td>
								      </tr>
								      <tr>
									      <th scope="row">3</th>
									      <td>Larry</td>
									      <td>the Bird</td>
									      <td>@twitter</td>
								      </tr>
								      </tbody>
							      </Table>
						      </Col>
					      </CardBody>
				      </Card>
			      </Col>
		      </Row>
	      </Container>
      </div>
    );
  }
}

export default App;
