import { fetchCities } from "../services/city"
import { spawn } from 'child_process'

beforeAll( () => {
    spawn('yarn', ['serve-public'])
})

describe('City', () => {
    it('Should fetch all cities', async done => {
        const cities = await fetchCities()
        expect(cities.length).toBe(50)
        done()
    })
})