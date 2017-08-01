import React, { Component } from 'react';
import { Map as LMap, Marker, Popup, TileLayer } from 'react-leaflet';
import Config from '../../config';
import L from 'leaflet';

class Map extends Component {
    render() {
        const mapStyle = this.props.mapStyle;
        const LIcon = L.icon({
            iconUrl: require(`./assets/icon_pin_${mapStyle}.png`),

            iconSize: [25, 37], // size of the icon
            iconAnchor: [0, 40], // point of the icon which will correspond to marker's location
            // popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
        const markers = Config.markers[this.props.type].map((marker, index) => 
                <Marker key={index} position={marker.position} icon={LIcon}>
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
