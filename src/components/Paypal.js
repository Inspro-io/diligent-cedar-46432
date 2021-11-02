import React from 'react';
import _ from 'lodash';

import {classNames} from '../utils';
import Action from './Action';

const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });

export default class Paypal extends React.Component {

    createOrder(data, actions) {
        return actions.order.create({
        purchase_units: [
            {
            amount: {
                value: "0.01",
            },
            },
        ],
        });
    }

    onApprove(data, actions) {
        return actions.order.capture();
    }

    render() {
        return (
            <PayPalButton
                createOrder={(data, actions) => this.createOrder(data, actions)}
                onApprove={(data, actions) => this.onApprove(data, actions)}
            />
            );
    }
}

