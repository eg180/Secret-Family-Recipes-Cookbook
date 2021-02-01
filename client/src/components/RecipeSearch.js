import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    background-color: #e2d4ba;
    min-height: 10vh;
    input {
        margin-right: 3rem;
        margin-bottom: 1rem;
        padding: .75rem;
    }
    p {
        padding: 1.5rem;
    }
`

function RecipeSearch() {
    return (
        <StyledDiv>
            <p>Find your recipe</p>
            <input
            />
        </StyledDiv>
    )
}

export default RecipeSearch
