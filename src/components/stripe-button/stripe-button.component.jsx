import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price, history }) => {
    const priceForStripe = price * 100;
    const publishableKey =
        'pk_test_51IWIUiLtjBgXtFSlRZkOOSISeZawhQDGeV9LGcLog19b1xHx4uc0WnZVWbGs8nSUJAKfUJSsFy58q1NJ1LfnT4x100ZEwNQrNs';

    const onToken = token => {
        console.log(token);
        history.push('/');
        alert('Payment successful');
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
