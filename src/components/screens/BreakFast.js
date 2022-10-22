import React from "react";
import styled from "styled-components";

function BreakFast() {
    return (
        <Container>
            <Data>BreakFast Is Not Ready.....!</Data>
        </Container>
    );
}

export default BreakFast;
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
