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
import SignOutBar from './components/SignOutBar';
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

  const [signedInUser, setSignedInUser] = useState('')


  useEffect(() => {
    // check to see if user in localstorage to see what components to hide/show
    if (window.localStorage.getItem('user_username')) {
      console.log('there is user info saved in local storage / user logged in, so to speak')
      let u = window.localStorage.getItem('user_username')
      setSignedInUser(u)

    } else {
      console.log('no local storage found')
    }
  }, []);

  const updateSignedInUser = (u) => {
    console.log('data received from SignInBox in App')
    console.log(u)
    setSignedInUser(u); // sets signed in user to state
    window.localStorage.setItem('user_username', u)
  }

  const signOutUser = () => {
    setSignedInUser('');
  }

  return (
    <div className="App">
    <UserContext.Provider value={signedInUser}>
      <Header />
      {signedInUser && <RecipeSearch />}
      {signedInUser ? <SignOutBar signOutUser={signOutUser} /> : <SignInBox updateSignedInUserInApp={updateSignedInUser} />}
      <StyledSection>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/signup" component={SignUp} />
          <Route path="/welcome" component={Welcome} />
        </Switch>
        <SideBarRight />
      </StyledSection>
    </UserContext.Provider>
    </div>
  );
}

export default App;
