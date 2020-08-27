import React from 'react';


const Cart = (props) => {
const summary = props.cart;
const totalFees = summary.reduce((total, course)=> total + course.fee , 0);
    return (
        <div>
            <h3>Course Purchsed</h3>
            <p>Total Course:{summary.length}</p>
            <p>Total Fees:${totalFees} </p>
        </div>
    );
};

export default Cart;