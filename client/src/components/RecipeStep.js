import React, { useState } from 'react';
import StepOptions from './StepOptions';

export default function RecipeStep(props) {

    const { dbIngredients, dbUnits } = props;

    const [stepNo, setStepNo] = useState(1);


    return (
        <div>
            <label> <h2>Step {stepNo}</h2>
                <textarea
                    placeholder="step instructions"
                    rows="4"
                    cols="50"
                    />
                </label>
            <StepOptions dbIngredients={dbIngredients} dbUnits={dbUnits} />

        </div>
    )
}
