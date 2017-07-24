import React, { Component } from 'react';
import MapGL from 'react-map-gl';
import DeckGL, { LineLayer } from 'deck.gl';

const token =
    'pk.eyJ1IjoidnZlbGFyZGUiLCJhIjoiY2lzMW10aW5rMDA3aDJ5bzdvN25jaXFwYiJ9.gWQR2LQ1vXnuPx2bH_zq2g'; //process.env.MAPBOX_ACCESS_TOKEN; // eslint-disable-line

const viewport = {
    width: 1000,
    height: 500,
    longitude: -3.776577,
    latitude: 43.443417,
    zoom: 11,
    pitch: 0,
    bearing: 0
};

// Data to be used by the LineLayer
const data = [
    {
        sourcePosition: [-3.776577, 43.443417],
        targetPosition: [-3.676577, 43.443417]
    }
];

class App extends Component {
    render() {
        return (
            <MapGL
                {...viewport}
                mapStyle="mapbox://styles/mapbox/dark-v9"
                mapboxApiAccessToken={token}
            >
                <DeckGL
                    {...viewport}
                    layers={[
                        new LineLayer({
                            id: 'line-layer',
                            getColor: x => [255, 0, 0, 255],
                            strokeWidth: 5,
                            data
                        })
                    ]}
                />
            </MapGL>
        );
    }
}

export default App;
