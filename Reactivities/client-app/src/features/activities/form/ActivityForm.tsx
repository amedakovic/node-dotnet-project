import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";

export default function ActivityForm(){
    return(
        <Segment clearing>
            <Form>
                <Form.Input placeholder='title'/>
                <Form.TextArea placeholder='description'/>
                <Form.Input placeholder='category'/>
                <Form.Input placeholder='date'/>
                <Form.Input placeholder='city'/>
                <Form.Input placeholder='venue'/>
                <Button floated="right" positive type="submit" content='Submit'/>
                <Button floated="right"  type="button" content='Cancel'/>
            </Form>
        </Segment>
    )
}