import React from "react";
import styled from "styled-components";

function Dinner() {
    return (
        <Container>
            <Data>Dinner Is Not Ready.....!</Data>
        </Container>
    );
}

export default Dinner;
const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
`;
const Data = styled.h1`
    font-size: large;
    color: red;
    margin: auto;
`;
