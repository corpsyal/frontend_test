import * as React from 'react'
import styled from 'styled-components'
import CityList from './CityList'
import CityMap from './CityMap'


const Wrapper = styled.div`
    border: 1px solid lightgrey;
    display: flex;
    padding: 32px; // multiple of 8 (google guidelines)
`
const defaultPosition = [51.505, -0.09]
const getPosition = city => [city.latitude, city.longitude]

const CitySelector = ({ onChange }) => {
    const [selectedCity, setSelectedCity] = React.useState({})
    const position = React.useMemo(() => selectedCity.latitude && selectedCity.longitude ? getPosition(selectedCity) : defaultPosition, [selectedCity])

    const onCityChange = React.useCallback(newCity => setSelectedCity(newCity), [])

    React.useEffect(() => {
        onChange(selectedCity)
    }, [selectedCity, onChange])

    return (
        <Wrapper>
            <CityList selectedCity={selectedCity} onCityChange={onCityChange} />
            <CityMap position={position} city={selectedCity} />
        </Wrapper>
    )
}

export default CitySelector