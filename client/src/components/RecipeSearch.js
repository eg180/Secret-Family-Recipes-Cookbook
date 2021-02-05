import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    padding-bottom: 1.5rem;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    background-color: #e2d4ba;
    background-color: white;
    /* min-height: 10vh; */
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
    #plus {
        background-color: #caffbf;
        color: white;
        border-color: purple;
        padding: .25rem;
        margin: .50rem;
        border-radius: 20%;
        :hover {
            background-color: #80ffdb;
            cursor: pointer;
        }
    }
`

function RecipeSearch() {
    return (
        <StyledDiv>
            <div>
                <span class="marquee">Random Recipe</span>
            </div>
            <div>
                <span id="search">Find your recipe</span>
                <input
                />
            </div>
            <div>
                <span class="marquee">Add a recipe</span><span id="plus">➕</span>

            </div>
            
        </StyledDiv>
    )
}

export default RecipeSearch
