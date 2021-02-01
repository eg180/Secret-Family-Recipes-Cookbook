import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
    .links {
        background-color: white;
        padding: 1.5rem;
        margin-right: 2rem;
        border-radius: 10px;
    }
    

`

function Nav() {
    return (
        <>
            <StyledNav>
                <span class="links">
                    Sign Up
                </span>
                <span class="links">
                    About
                </span>
                
                
            </StyledNav>
        </>
    )
}

export default Nav
