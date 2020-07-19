import axios from 'axios'
import { DEFAULT_LENGTH } from '../constants/city'

export const fetchCities = async () => {
    const { data } = await axios.get('/cities.json')
    return data.slice(0, DEFAULT_LENGTH) // return first 50 items in a first time
}