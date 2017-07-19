import React, { Component } from 'react';
import MapGL from 'react-map-gl';
// https://github.com/zjhch123/react-map-gl-demo-with-create-react-app
// import mapboxgl from 'mapbox-gl'; //https://github.com/uber/react-map-gl/issues/176
//require('script!mapbox-gl/dist/mapbox-gl.js');

const token =
    'pk.eyJ1IjoidnZlbGFyZGUiLCJhIjoiY2lzMW10aW5rMDA3aDJ5bzdvN25jaXFwYiJ9.gWQR2LQ1vXnuPx2bH_zq2g'; //process.env.MAPBOX_ACCESS_TOKEN; // eslint-disable-line
class App extends Component {
    render() {
        return (
            <MapGL
                width={1000}
                height={500}
                latitude={43.443417}
                longitude={-3.776577}
                zoom={11}
                mapStyle="mapbox://styles/mapbox/dark-v9"
                mapboxApiAccessToken={token}
            />
        );
    }
}

export default App;
