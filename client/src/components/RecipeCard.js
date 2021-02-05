import React from 'react';
import styled from 'styled-components';

const RecipeCardDiv = styled.div`
    /* display: flex;
    justify-content: center; */
    // flex would control the text inside the div
    background-color: #dde5b6;
    /* margin-top: 1rem; */
    margin-bottom: 1rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    border-radius: 10px;
    #recipe-title {
        background-color: white;
        font-size: 1.2rem;
        padding-bottom: .25rem;
    }#recipe-username {
        font-size: .75rem;
        padding-bottom: .45rem;
    }
    #recipe-category {
        color: #4a4e69;
        font-size: .55rem;
    }
    div {
        color: pink;
    }
`



export default function RecipeCard(props) {
    const { recipe } = props;

    return (
        <RecipeCardDiv>
            <h1 id="recipe-title">{recipe.recipe_name}</h1>
            <div>
                <p id="recipe-username">by: {recipe.user_username}</p>
            </div>
            <p id="recipe-category">Category: {recipe.category}</p>
        </RecipeCardDiv>
    )
}
