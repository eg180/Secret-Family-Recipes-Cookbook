import React, { useEffect } from 'react'

export default function SearchResChild(props) {


    useEffect(() => {
        // get search obj from local storage
        let searchRes = window.localStorage.getItem('searchRes')
        console.log(searchRes)
    })
    return (
        <div>
            
        </div>
    )
}
