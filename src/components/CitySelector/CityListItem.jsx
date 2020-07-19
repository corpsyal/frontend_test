import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    border: 1px solid lightgrey;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    margin-bottom: 8px;

`

const CityListItem = () => {
    return (
        <Wrapper>
            Chicago
        </Wrapper>
    )
}

export default CityListItem