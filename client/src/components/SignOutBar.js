import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { UserContext } from "../contexts/UserContext";
import axios from 'axios';
import styled from 'styled-components';

const PageContainerDiv = styled.div`
    .sub-text {
        background-color: #e2d4ba;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding-right: 5rem;
        /* padding-bottom: .5rem; */
        font-size: .9rem;
    }
    #logout {
        color: #85baa1;
        padding-left: .75rem;
    }
`

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 3rem;
    background-color: green;
    /* padding-bottom: 1.5rem; */
    align-items: flex-end;
    background-color: #e2d4ba;
    min-height: 10vh;
    #sub-text {
        background-color: #e2d4ba;
        display: flex;
        justify-content: flex-end;
        padding-right: 5rem;
        padding-bottom: .5rem;
        font-size: .9rem;
    }
    input {
        margin-left: 1rem;
        /* margin-bottom: 1rem; */
        padding: .75rem;
    }
`

const StyledButton = styled.button`
    background-color: #f1e3e4;
    border: none;
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-left: 1rem;
    border-radius: 10px;
`

export default function SignOutBar(props) {
    const { signOutUser } = props;

    const signedInUser = useContext(UserContext);

    let history = useHistory()

    const handleSignOut = () => {
        localStorage.clear();
        signOutUser()
        history.push('/');
    }


    return (
        <PageContainerDiv>
            <StyledDiv>
                {/*<div>
                    <StyledButton onClick={handleSignOut}>Sign Out</StyledButton>
                </div>*/}
                <div>
                    <span id="sub-text">You are signed in as {signedInUser}</span>
                </div>
                <div>
                    <span id="sub-text"><Link onClick={handleSignOut}>Sign out?</Link></span>
                </div>
            </StyledDiv>
        </PageContainerDiv>
    )
}
