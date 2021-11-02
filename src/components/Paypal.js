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
        let page = _.get(this.props, 'page', null);
        let menu = _.get(this.props, 'header_menu', null);
        return (
            <ul className="menu flex-md items-md-center">
            {_.map(menu, (item, item_idx) => {
                let page_url = _.trim(_.get(page, 'url', null), '/');
                let item_url = _.trim(_.get(item, 'url', null), '/');
                let item_style = _.get(item, 'style', null) || 'link';
                return (
                	<li key={item_idx} className={classNames('menu__item', 'ml-md-3', {'is-active': (page_url === item_url) && (item_style === 'link'), 'menu__item-btn': item_style !== 'link'})}>
                		<Action {...this.props} action={item} />
                	</li>
                )
            })}
            </ul>
        );
    }
}

