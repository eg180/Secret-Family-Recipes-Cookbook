import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
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

function RecipeSearch(props) {


    let history = useHistory()

    const [searchTerm, setSearchTerm] = useState({recipe_name: ""});
    const [returnedSearchObj, setReturnedSearchObj] = useState();
    const [clicked, setClicked] = useState(false)

    const toggleDialog = () => {
        setClicked(!clicked)
    }

    const searchDbForRecipe = (e) => {
        e.preventDefault()
        console.log('search term endpoint', searchTerm)
        axios.post('http://localhost:4000/api/recipes/search', searchTerm)
        .then(res => {
        
            
            
            // setReturnedSearchObj(res.data)
            // history.push("/searchresults")

            history.push({
                pathname: '/searchresults',
                state: {so: res.data}

            })
            

        })
        .catch(err => {
            console.log(err.message)
        })
        
    }

    const handleSearchChange = (e) => {
        e.preventDefault()
        setSearchTerm({
            ...searchTerm,
            [e.target.name]: e.target.value
        })

    }



    return (
        <>

            <StyledDiv>
                <div>
                    <span class="marquee">Random Recipe</span>
                </div>
                <div>
                    
                    <form onSubmit={searchDbForRecipe}>
                        <span id="search">Find a recipe</span>
                        <input
                        type="text"
                        name="recipe_name"
                        placeholder="Whatcha hungry for?"
                        onChange={handleSearchChange}
                        />
                        <button>Search</button>
                    </form>
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
