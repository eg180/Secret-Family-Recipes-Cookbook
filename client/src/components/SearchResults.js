import React from 'react'
import styled from 'styled-components';

const PageContainer = styled.div`
    min-width: 67vw;
    background-color: #f8edeb;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default function SearchResults() {
    return (
        <PageContainer>
            <h1>Your results here</h1>
        </PageContainer>
    )
}
