import React, { Component } from 'react';
import '../css/Map.css';
import { render } from 'react-dom';
import { Map as LMap, Marker, Popup, TileLayer } from 'react-leaflet';
import Config from '../config';

class Map extends Component {
    render() {
        return (
            <LMap id={this.props.id} center={this.props.position} zoom={this.props.zoom} /*dragging={false} 
                scrollWheelZoom={false} doubleClickZoom={false}*/ touchZoom={false} zoomControl={false}>
                <TileLayer
                    url={`${Config.pers.mapboxUrl}${Config.mapStyles.vaporPeach}/tiles/256/{z}/{x}/{y}@2x?access_token=${Config.pers.mapboxApiKey}`}
                    attribution="<attribution>" />
            </LMap>
        );
    }
}

export default Map;
