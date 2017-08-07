import '../../css/index.css';
import React, { Component } from 'react';
import R from 'ramda';

class Dropdown extends Component {
    render () {
        const list = this.props.contentList;
        const links = list.map((link, index) => {
            console.log(link.url);
            return <a target={R.test(/(http)/g, link.url) ? '_blank' : ''} key={index} href={link.url}>{link.text}<br /></a>
        });
        return (
            <div id="dropdownContent">
                {links}
            </div>
        );
    }
}

export default Dropdown;