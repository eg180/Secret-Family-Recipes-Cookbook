import React, { useState } from 'react';
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
    const [user, setUser] = useState({user_username: "", user_email: "", user_password: ""})

    const handleChange = (e) => {
        e.preventDefault()
        setUser({
            ...user,
            [e.target.name]: [e.target.value]
        });
    }
    
    return (
        <>
            <StyledSection>
            <div>
                {user.user_username ? user.user_username : ''}
            </div>
            <div>
                {user.user_email ? user.user_email : ''}
            </div>
            <div>
                {user.user_password ? user.user_password : ''}
            </div>
                <form>
                    <label>Username
                        <input
                        type="text"
                        name="user_username"
                        onChange={handleChange}
                        />
                    </label>
                    <label>E-mail
                        <input
                        type="email"
                        name="user_email"
                        onChange={handleChange}
                        />
                    </label>
                    <label>Password
                        <input
                        type="password"
                        name="user_password"
                        onChange={handleChange}
                        />
                    </label>
                    <button type="submit">Sign Up</button>
                </form>
            </StyledSection>
        </>
    )
}

export default SignUp
