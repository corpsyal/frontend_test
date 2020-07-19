import * as React from 'react'
import { fetchCities } from '../services/city'

const defaultContext = {
    cities: [],
    loading: true // personal choice, some people prefer to init with false
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) // no dependencies to use like componentDidMount

    return (
        <CityContext.Provider value={context}>
            {loading ? <span>Loading...</span> : children}
        </CityContext.Provider>
    );
}

