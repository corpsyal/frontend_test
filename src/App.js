import React from 'react';
import styled from 'styled-components'
import CitySelector from './components/CitySelector/CitySelector';
import { CityProvider } from './contexts/city';

const Wrapper = styled.div`
  margin: 40px auto;
  width: 1000px;
`

const App = () => {
  const onCityChange = React.useCallback(city => console.log(city), [])

  return (
    <Wrapper>
      <CityProvider>
        <CitySelector onChange={onCityChange} />
      </CityProvider>
    </Wrapper>
  )
}

export default App;
