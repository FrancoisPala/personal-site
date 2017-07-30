import React, { Component } from 'react';
import { Map as LMap, Marker, Popup, TileLayer } from 'react-leaflet';
import Config from '../../config';

class Map extends Component {
    render() {
        const mapStyle = this.props.mapStyle;
        const markers = Config.markers[this.props.type].map((marker, index) => 
                <Marker key={index} position={marker.position}>
                    <Popup>
                        {/*<h3>{marker.name}</h3>*/}
                        <p>{marker.text}</p>
                    </Popup>
                </Marker>
            );
        return (
            <LMap id={this.props.id} center={this.props.position} zoom={this.props.zoom} /*dragging={false} 
                scrollWheelZoom={false} doubleClickZoom={false}*/ touchZoom={false} zoomControl={false}>
                <TileLayer
                    url={`${Config.pers.mapboxUrl}${Config.mapStyles[mapStyle]}/tiles/256/{z}/{x}/{y}@2x?access_token=${Config.pers.mapboxApiKey}`}
                    attribution="<attribution>" />
                {markers}
            </LMap>
        );
    }
}

export default Map;
