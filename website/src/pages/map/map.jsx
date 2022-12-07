import React, { Component } from 'react'
import "./map.scss"
import MapData1 from '../../comp/Map/map-data';

export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            possibleMap: ['A', 'B'],
            currentMap: 0
        };
    }
    render() {
        return (
            <div className="page">
                <h1 className="header">{"Sơ đồ MCPs MAP " + this.state.possibleMap[this.state.currentMap]}</h1>
                <div className="map--container">
                    {this.state.currentMap === 0 && <MapData1 />}
                </div>

            </div>
        )
    }
}
