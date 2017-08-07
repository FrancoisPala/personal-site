import '../../css/index.css';
import React, { Component } from 'react';
import Dropdown from './Dropdown';

class Menu extends Component {
    render () {
        const stylesList = [{url: './simple', text: 'Simple'}, {url: './vaporwave', text: 'Vaporwave'}, {url: './outrun', text: 'Outrun'}]
        const workLinkList = [
            {url: 'https://www.linkedin.com/in/francoispala/', text: 'Linkedin'},
            {url: 'https://codepen.io/Jamukha/', text: 'Codepen'},
            {url: 'https://github.com/FrancoisPala/personal-site', text: 'Github'}]
        const thanksList = [
            {url: 'https://www.linkedin.com/in/magriromain/', text: 'Romain Magri'},
            {url: 'http://www.olivierpascal.fr/', text: 'Olivier Pascal'},
        ]
        return (
            <div id='menu'>
                <div className='menuButton'>
                    {/*<img src={require('../../assets/ic_menu_black_24px.svg')} height='30px' alt="menu"/>*/}
                    Change the style of the site!
                    <Dropdown contentList={stylesList} /><br />
                </div>

                <div className='menuButton'>
                    {/*<img src={require('../../assets/ic_menu_black_24px.svg')} height='30px' alt="menu"/>*/}
                    Check out my work
                    <Dropdown contentList={workLinkList}/>
                </div>

                <div className='menuButton'>
                    Thanks
                    <Dropdown contentList={thanksList}/>
                </div>
            </div>
        );
    }
}

export default Menu;