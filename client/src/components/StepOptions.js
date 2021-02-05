import React, { useState } from 'react';
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
    .bottom-button {
        background-color: white;
    }
    
`
const SubmitSection = styled.section`
    background-color: green;
    p {
        padding: .25rem;
        background-color: white;
    }
`

export default function StepOptions(props) {

    const [step, setStep] = useState()

    const { dbIngredients, dbUnits } = props;
    return (

        <>
            <div><h2>Add ingredients described in this step</h2></div>
            <StyledStepOptionsSection>
                <label>quantity
                    <input
                    type="text"
                    maxlength="2"
                    size="2"
                    />
                </label>
                <label>Units
                    <select>
                        {!dbUnits
                        ? "Loading" 
                        : dbUnits.map((unit, index) => {
                            return (
                                <option key={index} value={unit.unit}>
                                    {unit.unit}
                                </option>
                            )
                        })}
                    </select>
                </label>
                <label>Ingredient
                    <select>
                        {!dbIngredients
                        ? "Loading" 
                        : dbIngredients.map((ing, index) => {
                            return (
                                <option key={index} value={ing.ingredient_name}>
                                    {ing.ingredient_name}
                                </option>
                            )
                        })}
                    </select>
                </label>
                <div className="buttons">
                    <div><span id="cancel">❌</span></div>
                    <div><span id="add">✅</span></div>
                </div>
            </StyledStepOptionsSection>
            <SubmitSection>
                <div>
                    <p className="bottom-button">ADD STEP ➕</p>
                </div>
                <div>
                    <p className="bottom-button">DONE <span id="save">💾</span></p>
                </div>
            </SubmitSection>

        </>
    )
}
