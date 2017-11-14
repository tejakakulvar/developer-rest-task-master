/**
Reference:
https://facebook.github.io/react/docs/higher-order-components.html
 **/

import React from 'react';
import ReactDOM from 'react-dom';
import TweenMax from 'gsap';

export default function animatedPageWarpper(Page){
    return class extends React.Component{
        componentDidMount() {
            const el = ReactDOM.findDOMNode(this);
            TweenMax.fromTo(el, 0.3,
                {y: 50, opacity: 0},
                {y: 0, opacity: 1,
                ease:Power1.easeOut,
                onComplete: null});
        }
        render(){
            return <Page {...this.props} />
        }
    }
}
