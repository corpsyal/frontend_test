export const DEFAULT_LENGTH = 50

export const uniqCityId = ({city, latitude, longitude}) => `${city}-${latitude}-${longitude}` // to prevent city with same name