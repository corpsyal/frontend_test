import * as React from 'react'
import styled from 'styled-components'
import CityList from './CityList'
import CityMap from './CityMap'


const Wrapper = styled.div`
    border: 1px solid lightgrey;
    display: flex;
    padding: 32px; // multiple of 8 (google guidelines)
`

const CitySelector = () => {

    return (
        <Wrapper>
            <CityList />
            <CityMap />
        </Wrapper>
    )
}

export default CitySelector