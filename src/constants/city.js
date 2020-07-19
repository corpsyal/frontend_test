import PropTypes from 'prop-types';

export const DEFAULT_LENGTH = 50

export const uniqCityId = ({city, latitude, longitude}) => `${city}-${latitude}-${longitude}` // to prevent city with same name

export const isSelected = (selectedCity, city) => selectedCity.latitude === city.latitude && selectedCity.longitude === city.longitude

export const cityPropTypes = PropTypes.shape({
    city: PropTypes.string,
    growth_from_2000_to_2013: PropTypes.string,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    population: PropTypes.string,
    rank: PropTypes.string,
    state: PropTypes.string,
})