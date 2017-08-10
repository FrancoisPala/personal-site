import React, { Component } from 'react';
import '../../css/index.css';
import Menu from './Menu';
import Map from './Map';
import Sidepic from './Sidepic';
import MusicLink from './MusicLink';
import R from 'ramda';
import { Redirect } from 'react-router';

const STYLES = [
    'outrun',
    'simple',
    'vaporwave',
];

class Home extends Component {
    constructor() {
        super();
        this.state = {
            width: window.innerWidth,
        };
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };
    // version mobile: chaque map en dessous de l'autre
    // changer la background color et l'agencement
    // changer le menu
    render() {
        const style = this.props.match.params.style ? this.props.match.params.style : 'outrun';
        const { width } = this.state;
        const isMobile = width <= 700 ? 'mobile' : 'desktop';
        if (!R.contains(style, STYLES)) return <Redirect to="/outrun" />;
        return (
            <div id={`Presentation-${style}`}>
                <Menu />
                <img id='nameLogo' src={require(`../../assets/${style}_name.svg`)} alt="My Name"/>
                <h3>BACK-END DEVELOPER</h3>
                {style !== 'simple' ? <Sidepic side='left' style={style}/> : null}
                <p id='maintext'> Do you like Music? Video Games? Travelling? <a href='https://www.linkedin.com/in/francoispala/' target='blank' id='letsChat'>Let's chat!</a><br />
                    <mark>I'm a node.js / react.js developer</mark>, soon-to-be based in New York City.<br />
                    <mark>I'm open for work</mark>, whether you're a big company, a startup or just want my freelance services.<br />
                    If you want to learn a little bit more about me, feel free to check both maps under this text :)<br /></p>
                {style !== 'simple' ? <Sidepic side='right' style={style}/> : null}
                {style !== 'simple' ? <p>Style better experienced listening to <MusicLink style={style}/></p> : null}
                <div className={`mapWrapper ${isMobile}`}>
                    <Map id={`Map-leftBlock-${style}`} type='leftMap' mapStyle={style} position={[37.6, -95.665]} zoom={4}/>
                    <Map id={`Map-rightBlock-${style}`} type='rightMap' mapStyle={style} position={[48.864716, 2.349014]} zoom={10}/>
                </div>
            </div>
        );
    }
}

export default Home;