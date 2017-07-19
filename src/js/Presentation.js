import React, { Component } from 'react';
import '../css/Presentation.css';
import { render } from 'react-dom';
// import g from 'glamorous';
// import ReactSVG from 'react-svg';
import Map from './Map';

class Presentation extends Component {
    render() {
        return (
            <div id='Presentation'>
                <img id='nameLogo' src={require('./streamster_name.svg')} alt="My Name"/>
                <h3>BACK-END DEVELOPER</h3>
                <p>
                    Do you like Music? Video Games? Travelling? <a href='https://www.google.com' target='blank' id='letsChat'>Let's chat!</a><br />
                    <mark>I'm a node.js / react.js developer</mark>, soon-to-be based in New York City.<br />
                    <mark>I'm open for work</mark>, whether you're a big company, a startup or just want my freelance services.<br />
                    If you want to learn a little bit more about me, feel free to check both maps under this text :)<br />
                    {/*putain go integrer une api spotify reliee a une playlist qui sont mes decouvertes du moment ou qqc yess*/}
                </p>
                <div id='mapWrapper'>
                    <Map id='Map-leftBlock' position={[37.6, -95.665]} zoom={4}/>
                    <Map id='Map-rightBlock' position={[48.864716, 2.349014]} zoom={10}/>
                </div>

            </div>
        );
    }
}

export default Presentation;