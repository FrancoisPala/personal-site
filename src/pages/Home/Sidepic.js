import React, { Component } from 'react';

// pas appeler le composant si il devrait pas exister
class Sidepic extends Component {
    render () {
        const picture = require(`../../assets/${this.props.style}_sidepic.png`);
        return (
            <img id={`${this.props.side}pic`} src={picture} alt='Sidepic'/>
        );
    }
}

export default Sidepic;