import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    padding-bottom: 1.5rem;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    background-color: #e2d4ba;
    min-height: 10vh;
    input {
        margin-left: 1rem;
        /* margin-bottom: 1rem; */
        padding: .75rem;
    }
    p {
        padding: 1.5rem;
    }
    .marquee {
    }
`

function RecipeSearch() {
    return (
        <StyledDiv>
            <div>
                <span class="marquee">Random Recipe</span>
            </div>
            <div>
                <span class="marquee">Find your recipe</span>

            </div>
            
            <div>
                <span id="search">Find your recipe</span>
                <input
                />
            </div>
        </StyledDiv>
    )
}

export default RecipeSearch
