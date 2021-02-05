import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import StepOptions from './StepOptions';


const PageContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background-color: #f07167;
    h2 {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    
`
const StyledDialogDiv = styled.div`
    display: flex;
    justify-content: center;
    padding: 2rem;
    background-color: #f07167;
    h2 {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    
`






export default function RecipeDialog() {

    // store categories and info from db in step options

    const [newRecipe, setNewRecipe] = useState();
    const [step, setStep] = useState(1);

    return (
        <>
            <PageContainerDiv>
                <StyledDialogDiv>
                    <form>
                        <label> <h2>Recipe Title</h2>
                            <input
                            type="text"
                            size="50"
                            name="recipe_name"
                            />
                        </label>
                        <label> <h2>Step {step} </h2>
                            <textarea
                            placeholder="step instructions"
                            rows="4"
                            cols="50"
                            />
                        </label>
                    </form>
                </StyledDialogDiv>
                <StepOptions />
            </PageContainerDiv>
        </>
    )
}
