import * as React from 'react'
import styled from 'styled-components'
import CityListItem from './CityListItem'


const Wrapper = styled.div`
    flex: 1;
    border: 1px solid lightgrey;
    margin-right: 32px;
    padding: 16px;
`

const CityList = () => {
    return (
        <Wrapper>
            <CityListItem />
        </Wrapper>
    )
}

export default CityList