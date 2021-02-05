import React, { useState } from 'react';
import styled from 'styled-components';
import RecipeDialog from './RecipeDialog';

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
        background-color: #80ffdb;
        color: #4d194d;
        border-color: purple;
        padding: .25rem;
        margin: .50rem;
        border-radius: 10px;
        :hover {
            background-color: #caffbf;
            cursor: pointer;
        }
    }
`

function RecipeSearch() {

    const [clicked, setClicked] = useState(false)

    const toggleDialog = () => {
        setClicked(!clicked)
    }



    return (
        <>

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
                    <span id="plus" onClick={toggleDialog}>{!clicked ? 'ADD recipe' : 'cancel'}</span>
                </div>      
            </StyledDiv>
            <div>
                {clicked && <RecipeDialog clicked={clicked} />}
            </div>

        </>
    )
}

export default RecipeSearch
