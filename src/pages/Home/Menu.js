import '../../css/Menu.css';
import React, { Component } from 'react';
import Dropdown from './Dropdown';

class Menu extends Component {
    render () {
        return (
            <div id='menu'>
                <button id='menuButton'>
                    {/*<img src={require('../../assets/ic_menu_black_24px.svg')} height='30px' alt="menu"/>*/}
                    Change the style of the site!
                </button>
                <Dropdown />
            </div>
        );
    }
}

export default Menu;