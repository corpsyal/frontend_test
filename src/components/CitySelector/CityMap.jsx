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

const CityMap = ({ position, city }) => {
    return (
        <Wrapper>
            <Map center={position} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>{city.city}</Popup>
                </Marker>
            </Map>
        </Wrapper>
    )
}

export default CityMap