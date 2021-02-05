import React from 'react';
import styled from 'styled-components';


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

function Sidebar() {
    return (
        <>
            <StyledDiv>
                <h3 id="sidebar-title">Latest secret recipes<span>🤫</span></h3>
                


                
            </StyledDiv>
        </>
    )
}

export default Sidebar;
