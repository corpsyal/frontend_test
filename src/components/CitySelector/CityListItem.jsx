import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    border: 1px solid lightgrey;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    margin-bottom: 8px;
    cursor: pointer;

    ${({isSelected}) => isSelected && `
        background-color: lightgrey;
    `}
`

const CityListItem = ({city, onCityChange, isSelected}) => {
    const handleClick = React.useCallback(() => onCityChange(city), [onCityChange, city])

    return (
        <Wrapper onClick={handleClick} isSelected={isSelected}>
            <span>{city.city}</span>
        </Wrapper>
    )
}

export default CityListItem