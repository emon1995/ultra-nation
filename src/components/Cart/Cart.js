import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    const totalPopulation = cart.reduce((total, cart) => total + cart.population,0)
    return (
        <div>
            <h3>Country added: {cart.length} </h3>
            <p>Total Population: {totalPopulation} </p>
        </div>
    );
};

export default Cart;