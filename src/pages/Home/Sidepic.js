import React, { Component } from 'react';

class Sidepic extends Component {
    render () {
        const picture = require(`../../assets/${this.props.style}_sidepic.png`);
        return <img id={`${this.props.side}pic`} src={picture} alt='Sidepic'/>;
    }
}

export default Sidepic;