import React from 'react';
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
    return (
        <>
            <StyledNav>
                <span class="links">
                    <Link to={'/signup'}>Sign Up</Link>
                </span>
                <span class="links">
                    About
                </span>
                
                
            </StyledNav>
        </>
    )
}

export default Nav
