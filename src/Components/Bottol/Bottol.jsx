import React from 'react';
import './Bottol.css';
import PropTypes from 'prop-types';
const Bottol = ({bottol, handleAddtoCard, handleRemoveToCard}) => {
    const {brand, colour, price}=bottol;
    return (
        <div className='bottol'>
            <h1>Name: {brand}</h1>
            <h2>price:{price}</h2>
            <button onClick={() => handleAddtoCard(bottol)}>Add to Card</button>
            <button onClick={() => handleRemoveToCard(bottol.id)}>Remove card</button>
        </div>
    );
};

Bottol.propTypes = {
    bottol: PropTypes.array,
}

export default Bottol;