import React from 'react';
import styled from 'styled-components';
import Nav from "./Nav.js";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    background-color: #725752;
    min-height: 20vh;
`

function Header() {
    return (
        <>
            <StyledHeader>
                <Nav />   
            </StyledHeader>
        </>
    )
}

export default Header;
