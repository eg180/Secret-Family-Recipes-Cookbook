import React from 'react';
import { Link } from 'react-router-dom';
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
        a {
            text-decoration: none;
            color: #370617;
        }

    }
`

function Header() {

    return (
        <>
            <StyledHeader>
            <h1 id="site-title"><Link to={'/'}>Secret Family Recipes</Link></h1>
                <Nav />  
            </StyledHeader>
        </>
    )
}

export default Header;
