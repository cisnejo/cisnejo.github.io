
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components';

import { About } from './components/About';
import Home from './components/Home';
import { Schedule } from './components/Schedule';
import Navigation from './utility_components/Navigation';

const AppContainer = styled.div`
display:flex;
flex-direction:column;
height:100vh;
width:100%;
max-width:1900px;
margin:auto;
`

function App() {




  return (
    <AppContainer className="App">
      <header className="App-header">
        <Navigation />
      </header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />} />
        <Route path="schedule" element={<Schedule />} />
      </Routes>

    </AppContainer>
  );
}

export default App;
