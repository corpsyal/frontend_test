import * as React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { cityPropTypes } from '../../constants/city';

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

CityListItem.propTypes = {
    city: cityPropTypes,
    onCityChange: PropTypes.func,
    isSelected: PropTypes.bool,
};

export default CityListItem