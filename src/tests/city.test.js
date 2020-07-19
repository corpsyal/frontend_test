import * as React from 'react'
import { fetchCities } from "../services/city"
import { screen } from '@testing-library/dom';
import { render, act } from '@testing-library/react'
import { spawn } from 'child_process'
import { CityProvider, CityContext } from "../contexts/city"
import useCity from '../hooks/useCity';
import { DEFAULT_LENGTH } from '../constants/city';

beforeAll(() => {
  spawn('yarn', ['serve-public'])
})

describe('City', () => {
  
  it('Should fetch all cities', async done => {
      const cities = await fetchCities()
      expect(cities.length).toBe(DEFAULT_LENGTH)
      done()
  })
  

  it('Should render city context with good value', async done => {
    const CityContextConsumer = () => {
      const { cities } = useCity()
      return <span>Received: {cities.length}</span>
    }

    const tree = (
      <CityProvider>
        <CityContextConsumer />
      </CityProvider>
    )

    act(() => {
      render(tree)
    })

    await screen.findByText(`Received: ${DEFAULT_LENGTH}`)
    done()
  })
})