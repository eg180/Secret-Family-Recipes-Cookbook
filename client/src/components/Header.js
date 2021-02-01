import React from 'react';
import styled from 'styled-components';
import Nav from "./Nav.js";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    background-color: #fec5bb;
    min-height: 20vh;
    #site-title {
        align-self: center;
        font-family: 'Beth Ellen', cursive;
        font-size: 3rem;
        margin-bottom: 1rem;

    }
`

function Header() {
    return (
        <>
            <StyledHeader>
            <h1 id="site-title">Secret Family Recipes</h1>
                <Nav />   
            </StyledHeader>
        </>
    )
}

export default Header;
