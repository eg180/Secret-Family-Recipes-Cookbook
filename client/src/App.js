import { useEffect, useState } from 'react';
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

import { UserContext } from './contexts/UserContext';

const StyledSection = styled.div`
  display: flex;
  min-width: 100vh;
`


function App() {

  const [hideSignIn, setHideSignIn] = useState(false);
  const [fromApp, setFromApp] = useState('herp')

  useEffect(() => {
    // check to see if user in localstorage to see what components to hide/show
    if (window.localStorage.getItem('user_username')) {
      console.log('there is user info saved in local storage / user logged in, so to speak')
      setHideSignIn(true)
    } else {
      console.log('no local storage found')
    }
  }, []);

  return (
    <div className="App">
      <Header />
      {hideSignIn && <RecipeSearch />}
      {hideSignIn ? '' : <SignInBox />}
      <StyledSection>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/signup" component={SignUp} />
          <UserContext.Provider value={fromApp}>
            <Route path="/welcome" component={Welcome} />
          </UserContext.Provider>
        </Switch>
      <SideBarRight />
      </StyledSection>
    </div>
  );
}

export default App;
