import React, { useEffect, useState } from 'react';
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
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        // window.localStorage.getItem(user_username);
        const localStorageResult = window.localStorage.getItem('user_username')
        console.log('here is my obj', localStorageResult)
        setCurrentUser(localStorageResult);
        
    }, [])
    
    return (
        <PageContainer>

            <StyledWelcomeDiv>
                <h1>Welcome, {currentUser && currentUser}!</h1>
            </StyledWelcomeDiv>
            <div>
                <h2>Content here</h2>
            </div>

        </PageContainer>
    )
}
