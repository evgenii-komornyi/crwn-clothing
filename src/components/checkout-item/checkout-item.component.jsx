import React from 'react';
import { connect } from 'react-redux';

import {
    addItem,
    removeItem,
    clearItemFromCart,
} from '../../redux/cart/cart.actions';

import {
    CheckoutItemContainer,
    ImageContainer,
    SpanContainer,
} from './checkout-item.styles.jsx';

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt="item" />
            </ImageContainer>
            <SpanContainer>{name}</SpanContainer>
            <SpanContainer quantity>
                <div className="arrow" onClick={() => removeItem(cartItem)}>
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>
                    &#10095;
                </div>
            </SpanContainer>
            <SpanContainer>{price}</SpanContainer>
            <div className="remove-button" onClick={() => clearItem(cartItem)}>
                &#10005;
            </div>
        </CheckoutItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    clearItem: item => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
