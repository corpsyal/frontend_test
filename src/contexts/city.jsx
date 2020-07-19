import * as React from 'react'
import { fetchCities } from '../services/city'

const defaultContext = {
    cities: [],
    loading: true
}

export const CityContext = React.createContext(defaultContext)

export const CityProvider = ({ children }) => {
    const [cities, setCities] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    const context = React.useMemo(() => ({
        cities,
        loading
    }), [cities, loading])
    
    const initCities = React.useCallback(async () => {
        const allCities = await fetchCities()
        setCities(allCities)
        setLoading(false)
    }, [])

    React.useEffect(() => {
        initCities()
    }, [])

    return (
        <CityContext.Provider value={context}>
            {loading ? <span>Loading...</span> : children}
        </CityContext.Provider>
    );
}

