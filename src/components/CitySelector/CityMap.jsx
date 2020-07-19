import * as React from 'react'
import styled from 'styled-components'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const Wrapper = styled.div`
    flex: 3;
    border: 1px solid lightgrey;

    .leaflet-container {
        height: 100%;
        width: 100%;
    }
`

const position = [51.505, -0.09]

const CityMap = () => {
    return (
        <Wrapper>
            <Map center={position} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Marker position={position}>
                    <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                </Marker>
            </Map>
        </Wrapper>
    )
}

export default CityMap