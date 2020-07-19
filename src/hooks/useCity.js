import * as React from 'react'
import { CityContext } from '../contexts/city'

const useCity = () => {
    const context = React.useContext(CityContext)

    if(!context)
        throw new Error("City context not provided !");
    
    return context
}

export default useCity