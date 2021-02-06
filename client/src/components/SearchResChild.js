import React, { useEffect } from 'react'

export default function SearchResChild(props) {
    const { rec } = props;

    // useEffect(() => {
    //     // get search obj from local storage
    //     let searchRes = window.localStorage.getItem('searchRes')
    //     console.log(searchRes)
    // })
    return (
        <div>
            <p>{rec.recipe_id}</p>
            <p>{rec.recipe_name}</p>
            <p>{rec.created_at}</p>
        </div>
    )
}
