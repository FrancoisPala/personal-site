import React, { Component } from 'react';

class Sidepic extends Component {
    render () {
        return (
            <img id={`${this.props.side}pic`} src={require(`../../assets/${this.props.style}_sidepic.png`)} alt='Sidepic'/>
        );
    }
}

export default Sidepic;