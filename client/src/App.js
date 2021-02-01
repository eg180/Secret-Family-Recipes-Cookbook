import logo from './logo.svg';
import './App.css';
import {
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RecipeSearch from './components/RecipeSearch';
import LandingPage from './components/LandingPage';
import SignUp from './components/SignUp';
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
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </StyledSection>
    </div>
  );
}

export default App;
