import React from 'react'
import styled from 'styled-components';

const StyledStepOptionsSection = styled.section`
    display: flex;
    background-color: #d8e2dc;
    p {
        padding: 2rem;
    }
    .buttons {
        display: flex;
        margin: .75rem;
        span {
            padding: .35rem;
            :hover {
                cursor: pointer;
            }
        }
    }
    
`

export default function StepOptions(props) {
    return (

        <>
            <div><h2>Add ingredients described in this step</h2></div>
            <StyledStepOptionsSection>
                <p>Quanity: </p>
                <p>Ingredient(s)</p>
                <p>Units</p>
                <div className="buttons">
                    <div><span id="cancel">❌</span></div>
                    <div><span id="add">✅</span></div>
                </div>
            </StyledStepOptionsSection>

        </>
    )
}
