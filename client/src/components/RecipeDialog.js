import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
// import StepOptions from './StepOptions';
import RecipeStep from './RecipeStep'


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


    useEffect(() => {
        // get latest recipes from db
        // save in state
        // present on page
        const ingURL = 'http://localhost:4000/api/recipes/ingredients';
        const unitURL = 'http://localhost:4000/api/recipes/units';

        const promIng = axios.get(ingURL)
        const promQuant = axios.get(unitURL)

        Promise.all([promIng, promQuant])
        .then(res => {

            // console.log('below console logged res0')
            // console.log(res[0])
            setDbIngredients(res[0].data)
            // console.log('below console logged res1')
            // console.log(res[1])
            setDbUnits(res[1].data)
        })
        .catch(err => {
            console.log(err)
        })

        // axios.get('http://localhost:4000/api/recipes/ingredients')
        // .then(res => {
        //     console.log(res.data)
        //     // set avaiable recipe ingredients
        //     setDbIngredients(res.data)
        //     // set available units

        // })
        // .catch(err => {
        //     console.log(err)
        // })
    },[])

    const [dbIngredients, setDbIngredients] = useState();
    const [dbUnits, setDbUnits] = useState();


    const [recipeObject, setRecipeObject] = useState([]);

    const [recipeSteps, setRecipeSteps] = useState({step_number: "", step_instructions: ""});
    const [recipeIngredients, setRecipeIngredients] = useState({ingredient_name: "", quantity: "", unit: ""});
    const [recipeCategory, setRecipeCategory] = useState({category_id: 1})






    // store categories and info from db in step options

    const [newRecipe, setNewRecipe] = useState();


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
                    </form>
                </StyledDialogDiv>
                <RecipeStep dbUnits={dbUnits} dbIngredients={dbIngredients} />
            </PageContainerDiv>
        </>
    )
}
