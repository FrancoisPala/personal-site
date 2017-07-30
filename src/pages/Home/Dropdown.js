import '../../css/Menu.css';
import React, { Component } from 'react';

class Dropdown extends Component {
    render () {
        return (
            <div id="dropdownContent">
                <a href="./simple">Simple</a><br />
                <a href="./vaporwave">Vaporwave</a><br />
                <a href="./outrun">Outrun</a><br />
            </div>
        );
    }
}

export default Dropdown;