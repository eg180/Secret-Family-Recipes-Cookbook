import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RecipeSearch from './components/RecipeSearch';
import LandingPage from './components/LandingPage';
import styled from 'styled-components';

const StyledSection = styled.div`
  display: flex;
  min-width: 100vh;
`

function App() {
  return (
    <div className="App">
      <Header />
      <RecipeSearch />
      <StyledSection>
        <Sidebar />
        <LandingPage />
      </StyledSection>
    </div>
  );
}

export default App;
