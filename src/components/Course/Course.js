import React from 'react';
import { Button, Spinner,Badge } from 'react-bootstrap';
import './Course.css'

const Course = (props) => {
    const { id,name, fee, email} = props.items;
    return (
        <div className = 'course'> 
            <h3> Course Title:{name} <Badge variant="success">New</Badge><Spinner animation="grow" size="sm" /></h3>
            <p> Course Id:{id} </p>
            <p> Course Fee:{fee} </p>
            <p> email:{email} </p>
            <Button className = 'btn' variant="secondary"
            onClick = {()=> {props.addToCart(props.items)}}
            > Enroll Now</Button>
        </div>
    );
};

export default Course;