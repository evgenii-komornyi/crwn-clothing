import styled, { css } from 'styled-components';

const spans = css`
    width: 23%;
`;

const quantity = css`
    display: flex;

    .arrow {
        cursor: pointer;
    }

    .value {
        margin: 0 10px;
    }
`;

const isQuantity = props => {
    if (props.quantity) {
        return quantity;
    }
};

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;

    .remove-button {
        padding-left: 12px;
        cursor: pointer;
    }
`;

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const SpanContainer = styled.div`
    ${spans};

    ${isQuantity};
`;
