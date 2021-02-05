import React from 'react';
import styled from 'styled-components';



export default function RecipeCard(props) {
    const { recipe } = props;

    return (
        <div>
            <h1>{recipe.recipe_name}</h1>
            <p>{recipe.category}</p>
            <p>by {recipe.user_username}</p>
        </div>
    )
}
