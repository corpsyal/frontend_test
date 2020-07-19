import axios from 'axios'

export const fetchCities = async () => {
    const { data } = await axios.get('/cities.json')
    return data.slice(0, 50) // return first 50 items in a first time
}