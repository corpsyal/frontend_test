import * as React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { cityPropTypes } from '../../constants/city'

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

CityMap.propTypes = {
    city: cityPropTypes,
    position: PropTypes.arrayOf(PropTypes.number)
};

export default CityMap