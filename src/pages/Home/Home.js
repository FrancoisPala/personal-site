import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../css/vaporwave/index.css';
import '../../css/vaporwave/Presentation.css';
import '../../css/vaporwave/Map.css';
import '../../css/outrun/index.css';
import '../../css/outrun/Presentation.css';
import '../../css/outrun/Map.css';

import Map from './Map';

class Home extends Component {
    render() {
		const style = this.props.match.params.style;
		// console.log(style);
        return (
            <div id={`Presentation-${style}`}>
                <img id='nameLogo' src={require('../../assets/' + style  + '_name.svg')} alt="My Name"/>
                <h3>BACK-END DEVELOPER</h3>
                <p> Do you like Music? Video Games? Travelling? <a href='https://www.google.com' target='blank' id='letsChat'>Let's chat!</a><br />
                    <mark>I'm a node.js / react.js developer</mark>, soon-to-be based in New York City.<br />
                    <mark>I'm open for work</mark>, whether you're a big company, a startup or just want my freelance services.<br />
                    If you want to learn a little bit more about me, feel free to check both maps under this text :)<br />
                    {/*putain go integrer une api spotify reliee a une playlist qui sont mes decouvertes du moment ou qqc yess*/}
                </p>
                <div id='mapWrapper'>
                    <Map id={`Map-leftBlock-${style}`} mapStyle={style} position={[37.6, -95.665]} zoom={4}/>
                    <Map id={`Map-rightBlock-${style}`} mapStyle={style} position={[48.864716, 2.349014]} zoom={10}/>
                </div>
            </div>
        );
    }
}

export default Home;