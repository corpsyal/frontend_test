import * as React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import CityListItem from './CityListItem'
import useCity from '../../hooks/useCity'
import { uniqCityId, isSelected, cityPropTypes } from '../../constants/city'
import CityListPagination from './CityListPagination';


const Wrapper = styled.div`
    flex: 1;
    border: 1px solid lightgrey;
    margin-right: 32px;
    padding: 16px;
    max-height: 512px;
    overflow: scroll;

`
const itemPerPage = 50

const CityList = ({ selectedCity, onCityChange }) => {
    const { cities } = useCity()

    const [page, setPage] = React.useState(1)
    const start = (page-1) * itemPerPage
    const end = start + itemPerPage

    const slicedCities = React.useMemo(() => cities.slice(start, end), [cities, start, end])

    const onPrevious = React.useCallback(() => (page > 1) && setPage(page-1), [page])
    const onNext = React.useCallback(() => (page < cities.length/itemPerPage) && setPage(page+1), [page, cities.length])

    return (
        <Wrapper>
            <CityListPagination page={page} onNext={onNext} onPrevious={onPrevious} />
            {slicedCities.map(city =>
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

CityList.propTypes = {
    selectedCity: cityPropTypes,
    onCityChange: PropTypes.func
};

export default CityList