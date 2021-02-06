import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import SearchResChild from './SearchResChild'
import styled from 'styled-components';

const PageContainer = styled.div`
    min-width: 67vw;
    background-color: #f8edeb;
    display: flex;
    flex-direction: column;
    align-items: center;
`



export default function SearchResults(props) {

    const location = useLocation()
    const { returnedSearchObj } = props;

    const [searchObj, setSearchObj] = useState();


    useEffect(() => {
        setSearchObj(location.state.so)
    })

    return (
        <PageContainer>
            <h1>Your results here</h1>
            <div>
                {!searchObj
                ? 'Loading results...'
                : searchObj.map((rec, index) => {
                    return <SearchResChild key={index} rec={rec} />
                })}
            </div>
        </PageContainer>
    )
}
