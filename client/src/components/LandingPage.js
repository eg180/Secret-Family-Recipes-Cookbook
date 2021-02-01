import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
    display: flex;
    justify-content: space-around;
    background-color: white;
    /* min-width: 80vh; */
    min-width: 84.21vw;
    .ad {
        margin: 2rem;
        border-radius: 10px;
        background-color: #f8edeb;
        max-width: 20vw;
        padding: 2rem;
        max-height: 15vh;
    }
    ul {
        padding: 1.5rem;
    }
`


function LandingPage() {
    return (
        <>
            <StyledSection>
                <div className="ad">
                    <ul><h2>Create an account to...</h2>
                        <li>save your own recipes</li>
                    </ul>
                    <div>🍰</div>
                </div>
                <div className="ad">
                    <ul><h2>Create an account to...</h2>
                        <li>search for recipes</li>
                    </ul>
                    <div>🔎</div>
                </div>
                <div className="ad">
                    <ul><h2>Create an account to...</h2>
                        <li>save your own recipes</li>
                    </ul>
                    <div>💾</div>
                </div>
            </StyledSection>
        </>
    )
}

export default LandingPage
