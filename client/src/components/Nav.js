import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
    .links {
        background-color: #f1e3e4;
        padding: 1.5rem;
        margin-right: 2rem;
        border-radius: 10px;
        a {
            text-decoration: none;
        }
    }
    

`

function Nav() {

  const [hideSignIn, setHideSignIn] = useState(false);

  useEffect(() => {
    // check to see if user in localstorage to see what components to hide/show
    if (window.localStorage.getItem('user_username')) {
      console.log('there is user info saved in local storage / user logged in, so to speak')
      setHideSignIn(true)
    }
  }, []);



    return (
        <>
            <StyledNav>
                {/*<span class="links">
                    {!hideSignIn ? <Link to={'/signup'}>Sign Up</Link> : <Link to={'/logout'}>Log Out</Link>}
                </span>
                <span class="links">
                    About
                </span>*/}
                
                
            </StyledNav>
        </>
    )
}

export default Nav
