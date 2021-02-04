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
import SideBarRight from './components/SideBarRight';
import RecipeSearch from './components/RecipeSearch';
import LandingPage from './components/LandingPage';
import Welcome from './components/Welcome';
import SignInBox from './components/SignInBox';
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
      <SignInBox />
      <StyledSection>
        <Sidebar />
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/welcome" component={Welcome} />
          <Route exact path="/" component={LandingPage} />
        </Switch>
      <SideBarRight />
      </StyledSection>
    </div>
  );
}

export default App;
