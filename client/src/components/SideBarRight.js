import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import RecipeCard from './RecipeCard';


const StyledDiv = styled.div`
    background-color: #d8e2dc;
    min-height: 65vh;
    min-width: 15vw;
    /* max-width: 30vh; */
    #sidebar-title {
        padding: 2rem;
        background-color: #85baa1;
        /* border-radius: 10px; */
    }
`

function SideBarRight() {

    const [latestRecipes, setLatestRecipes] = useState();


    useEffect(() => {
        // get latest recipes from db
        // save in state
        // present on page
        axios.get('http://localhost:4000/api/recipes')
        .then(res => {
            console.log(res.data)
            setLatestRecipes(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    return (
        <>
            <StyledDiv>
                <h3 id="sidebar-title">Latest secret recipes<span>🤫</span></h3>
                {<ul>
                    {!latestRecipes
                    ? "Loading Recipes"
                    : latestRecipes.map((recipe, index) => {
                        return <RecipeCard key={index} recipe={recipe} /> 
                    })}
                </ul>}

                
                


                
            </StyledDiv>
        </>
    )
}

export default SideBarRight;
