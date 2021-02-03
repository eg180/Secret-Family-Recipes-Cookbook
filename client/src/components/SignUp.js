import React, { useState } from 'react';
import axios from 'axios';
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

    const handleSubmitForm = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/api/users', {user})
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err.message)
        })
        
        
    }

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
                <form onSubmit={handleSubmitForm}>
                    <label>Username
                        <input
                        type="text"
                        name="user_username"
                        autoComplete="off"
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
                    <button>Sign Up</button>
                </form>
            </StyledSection>
        </>
    )
}

export default SignUp
