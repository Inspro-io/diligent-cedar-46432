/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react");
const withPrefix = require("./src/utils/withPrefix").default;

exports.onRenderBody = function({ setHeadComponents, setPostBodyComponents }) {

    setHeadComponents([
        
    ]);

    setPostBodyComponents([
        <React.Fragment>
            <script defer src="https://www.paypal.com/sdk/js?client-id=AaaEWMK0RV8r4IB_6yGA46BCS9Ys19qaqFbNgYM1pvdaLYqEorCJlf0b9HLgA1adc65xGqxkjXPmmGHi"></script>
            <script src={withPrefix('js/init.js')}/>
            <script src={withPrefix('js/page-load.js')}/>
            <script src={withPrefix('js/page-unload.js')}/>
            
        </React.Fragment>
    ]);

};
