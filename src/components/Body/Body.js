import React from 'react';
import '../../course-info';
import './Body.css'
import Course from '../Course/Course';
import { useState } from 'react';
import courses from '../../course-info';
import Cart from '../Cart/Cart';

const Body = () => {
const [course, setCourse] = useState(courses);
const [cart, setCart] = useState([]);

const addToCart = (course)=>{
    const newCart = [...cart,course];
    setCart(newCart);
}
    return (
        <div className = 'body'>
            <div className = 'course'>
            {
                course.map( course => <Course addToCart = {addToCart} items = {course}></Course>) 
            }
            </div>
            <div className = 'cart'>
                <Cart cart = {cart}></Cart>
            </div>
        </div>
        
    );
};

export default Body;