import React from 'react';
import {Form, Button} from 'react-bootstrap';

// This is a wrapper for google.script.run that lets us use promises.
import server from '../../utils/server';

const { serverFunctions } = server;

export class FormSum extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = { num1: null, num2: null };
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleNumberChange(event) {
        let n = event.target.value;
        let id = event.target.id;

        const s = {}
        if(id === "n1") {
            this.setState({num1: parseInt(n)});
        } else {
            this.setState({num2: parseInt(n)});
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        serverFunctions.
            sumOnServer(this.state.num1, this.state.num2).
            then((value) => {
                alert("Sum calculated on the server: " + value);
                // expected output: "Success!"
              }).catch((e) => {alert(e)});
    }

    render() {
        
        return (
            
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="formNum1">
                    <Form.Label>First number</Form.Label>
                    <Form.Control id="n1" type="number" placeholder="Enter first number" onChange={this.handleNumberChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formNum2">
                    <Form.Label>Second number</Form.Label>
                    <Form.Control id="n2" type="number" placeholder="Enter second number" onChange={this.handleNumberChange}/>
                </Form.Group>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}
