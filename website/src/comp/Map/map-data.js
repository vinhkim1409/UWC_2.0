import React, { Component } from 'react'
import "./map-data.scss"
import { Button } from "react-bootstrap"

export default class MapData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addedMCPs: [],
        };
    }

    handleClick = (e) => {
        !this.state.addedMCPs.includes(e.target.alt) && this.setState((prevState) => (
            {
                ...prevState,
                addedMCPs: [...prevState.addedMCPs, e.target.alt]
            }
            // , () => console.log(this.state.addedMCPs)
        ))
    }

    handleDelClick = () => {
        this.setState(() => ({ addedMCPs: [] }))
    }

    handleUndoClick = () => {
        this.setState((prevState) => (
            {
                ...prevState,
                addedMCPs: prevState.addedMCPs.slice(0, -1)
            }
            // , () => console.log(this.state.addedMCPs)
        ))
    }
    render() {
        return (
            <>
                <div className="map-data">
                    {/* <img src={process.env.PUBLIC_URL + '/map/mapA.jpg'} alt="Planets" usemap="#planetmap" />

                <map name="planetmap">
                    <area nohref="true" shape="rect" coords="0,0,82,126" alt="Sun" href="sun.htm" />
                    <area nohref="true" shape="circle" coords="90,58,3" alt="Mercury" href="mercur.htm" />
                    <area nohref="true" shape="circle" coords="124,58,8" alt="Venus" href="venus.htm" />
                </map> */}
                    <img src={process.env.PUBLIC_URL + '/map/mapA.jpg'} useMap="#image-mapA" />
                    <map name="image-mapA">
                        <area nohref="true" target="" alt="AG3" title="AG3" href="#" coords="159,118,-1,1" shape="rect" onClick={this.handleClick} />
                        <area nohref="true" target="" alt="AG4" title="AG4" href="#" coords="159,255,-1,136" shape="rect" onClick={this.handleClick} />
                        <area nohref="true" target="" alt="AH2-AH1" title="AH2-AH1" href="#" coords="204,342,0,534" shape="rect" onClick={this.handleClick} />
                        <area nohref="true" target="" alt="Stadium" title="Stadium" href="#" coords="493,0,207,256" shape="rect" onClick={this.handleClick} />
                        <area nohref="true" target="" alt="XHH" title="XHH" href="#" coords="366,279,489,535" shape="rect" onClick={this.handleClick} />
                        <area nohref="true" target="" alt="A14" title="A14" href="#" coords="577,478,643,480,646,454,596,452,595,410,575,410" shape="poly" onClick={this.handleClick} />
                        <area nohref="true" target="" alt="A18" title="A18" href="#" coords="577,361,595,361,597,320,643,316,643,291,577,293" shape="poly" onClick={this.handleClick} />
                        <area nohref="true" target="" alt="A15" title="A15" href="#" coords="680,454,684,481,749,478,750,409,731,411,728,454" shape="poly" onClick={this.handleClick} />
                        <area nohref="true" target="" alt="A17" title="A17" href="#" coords="731,360,750,360,748,291,680,291,683,320,731,320" shape="poly" onClick={this.handleClick} />
                        <area nohref="true" target="" alt="A9" title="A9" href="#" coords="798,444,878,469" shape="rect" onClick={this.handleClick} />
                        <area nohref="true" target="" alt="A4" title="A4" href="#" coords="902,444,980,469" shape="rect" onClick={this.handleClick} />
                        <area nohref="true" target="" alt="A3" title="A3" href="#" coords="1053,443,1134,472" shape="rect" onClick={this.handleClick} />
                        <area nohref="true" target="" alt="A2" title="A2" href="#" coords="1153,444,1236,472" shape="rect" onClick={this.handleClick} />
                        <area nohref="true" target="" alt="A20" title="A20" href="#" coords="684,53,748,53,749,122,729,123,728,81,682,78" shape="poly" onClick={this.handleClick} />
                        <area nohref="true" target="" alt="A19" title="A19" href="#" coords="729,169,748,170,750,242,682,242,680,213,731,211" shape="poly" onClick={this.handleClick} />
                        <area nohref="true" target="" alt="A12" title="A12" href="#" coords="802,242,857,243,855,218,824,213,822,157,803,157" shape="poly" onClick={this.handleClick} />
                        <area nohref="true" target="" alt="A8" title="A8" href="#" coords="795,398,816,394,815,351,865,351,864,325,796,326" shape="poly" onClick={this.handleClick} />
                        <area nohref="true" target="" alt="A7" title="A7" href="#" coords="913,326,980,326,981,396,963,398,961,351,914,351" shape="poly" onClick={this.handleClick} />
                        <area nohref="true" target="" alt="A5" title="A5" href="#" coords="1286,73,1356,73,1353,99,1314,99,1313,221,1286,221" shape="poly" onClick={this.handleClick} />
                        <area nohref="true" target="" alt="A6" title="A6" href="#" coords="1394,71,1458,73,1459,218,1435,221,1434,100,1393,98" shape="poly" onClick={this.handleClick} />
                        <area nohref="true" target="" alt="A1" title="A1" href="#" coords="1051,326,1119,325,1119,353,1071,353,1071,395,1051,395" shape="poly" onClick={this.handleClick} />
                        <area nohref="true" target="" alt="A10" title="A10" href="#" coords="1169,325,1236,325,1236,398,1218,398,1218,353,1169,352" shape="poly" onClick={this.handleClick} />
                        <area nohref="true" target="" alt="A11" title="A11" href="#" coords="1248,157,1232,157,1230,217,1205,215,1205,242,1247,242" shape="poly" onClick={this.handleClick} />
                    </map>
                </div>
                <div className="append">
                    <h1>Các MCPs cần thu gom đã chọn:
                        <div className="two-buttons">
                            <img src={process.env.PUBLIC_URL + '/map/delete.png'} onClick={this.handleDelClick} />
                            <img src={process.env.PUBLIC_URL + '/map/undo.png'} onClick={this.handleUndoClick} />
                        </div>
                    </h1>
                    <h2>
                        {
                            this.state.addedMCPs.map((MCP, i) => {
                                return MCP + "  "
                            })

                        }
                    </h2>
                </div>
            </>
        )
    }
}
