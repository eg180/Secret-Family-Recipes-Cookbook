import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from "../contexts/UserContext";
import styled from 'styled-components';

const PageContainer = styled.div`
    min-width: 67vw;
    background-color: green;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledWelcomeDiv = styled.div`
    background-color: #a0c4ff;
`

export default function Welcome() {
    // const [userToGreet, setUserToGreet] = useState(current_user: );
    
    const signedInUser = useContext(UserContext);
    // const [currentUser, setCurrentUser] = useState();

    // useEffect(() => {
    //     // window.localStorage.getItem(user_username);
    //     const localStorageResult = window.localStorage.getItem('user_username')
    //     console.log('here is my obj', localStorageResult)
    //     setCurrentUser(localStorageResult);
        
    // }, [])
    
    return (
        <PageContainer>

            <StyledWelcomeDiv>
                <h1>Welcome, {signedInUser && signedInUser}!</h1>
                <ul><h2><Link to={'/signup'}>Test links - goes to sign in</Link></h2>
                    <li></li>
                </ul>
            </StyledWelcomeDiv>

        </PageContainer>
    )
}
