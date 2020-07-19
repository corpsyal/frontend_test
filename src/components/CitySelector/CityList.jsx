import * as React from 'react'
import styled from 'styled-components'
import CityListItem from './CityListItem'
import useCity from '../../hooks/useCity'
import { uniqCityId, isSelected } from '../../constants/city'


const Wrapper = styled.div`
    flex: 1;
    border: 1px solid lightgrey;
    margin-right: 32px;
    padding: 16px;
    max-height: 512px;
    overflow: scroll;

`

const CityList = ({ selectedCity, onCityChange }) => {
    const { cities } = useCity()

    return (
        <Wrapper>
            {cities.map(city =>
                <CityListItem
                    key={uniqCityId(city)}
                    city={city}
                    onCityChange={onCityChange}
                    isSelected={isSelected(selectedCity, city)}
                />)
            }
        </Wrapper>
    )
}

export default CityList