import React, { Component } from 'react';
import '../../css/vaporwave/index.css';
import '../../css/outrun/index.css';
import '../../css/simple/index.css';

import Menu from './Menu';
import Map from './Map';

class Home extends Component {
    render() {
        const style = this.props.match.params.style ? this.props.match.params.style : 'outrun';
        return (
            <div id={`Presentation-${style}`}>
                <Menu />
                <img id='nameLogo' src={require('../../assets/' + style  + '_name.svg')} alt="My Name"/>
                <h3>BACK-END DEVELOPER</h3>
                <p> Do you like Music? Video Games? Travelling? <a href='https://www.linkedin.com/in/francoispala/' target='blank' id='letsChat'>Let's chat!</a><br />
                    <mark>I'm a node.js / react.js developer</mark>, soon-to-be based in New York City.<br />
                    <mark>I'm open for work</mark>, whether you're a big company, a startup or just want my freelance services.<br />
                    If you want to learn a little bit more about me, feel free to check both maps under this text :)<br />
                    {/*putain go integrer une api spotify reliee a une playlist qui sont mes decouvertes du moment ou qqc yess*/}
                </p>
                <div id='mapWrapper'>
                    <Map id={`Map-leftBlock-${style}`} type='leftMap' mapStyle={style} position={[37.6, -95.665]} zoom={4}/>
                    <Map id={`Map-rightBlock-${style}`} type='rightMap' mapStyle={style} position={[48.864716, 2.349014]} zoom={10}/>
                </div>
            </div>
        );
    }
}

export default Home;