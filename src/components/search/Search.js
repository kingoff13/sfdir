import React, { Component } from "react";
import { Form } from "react-bootstrap";

export class Search extends Component
{
    render() {
        return <Form>
            <Form.Control type='text' onChange={this.props.filterData}/>
        </Form>
    }
}