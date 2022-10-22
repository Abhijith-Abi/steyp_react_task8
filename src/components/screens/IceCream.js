import React from "react";
import styled from "styled-components";

function IceCream() {
    return (
        <Container>
            <Data>IceCream Is Not Ready.....!</Data>
        </Container>
    );
}

export default IceCream;
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
