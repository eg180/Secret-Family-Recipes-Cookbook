import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
    padding: 5rem;
    display: flex;
    justify-content: space-around;
    background-color: white;
    /* min-width: 80vh; */
    min-width: 84.21vw;
    
    input {
        margin-bottom: 2rem;
        display: flex;
        margin-left: 2rem;
    }
`

function SignUp() {
    return (
        <>
            <StyledSection>
                <form>
                    <label>Name
                        <input
                        />
                    </label>
                    <label>Email
                        <input
                        />
                    </label>
                    <label>Password
                        <input
                        />
                    </label>
                </form>
            </StyledSection>
        </>
    )
}

export default SignUp
