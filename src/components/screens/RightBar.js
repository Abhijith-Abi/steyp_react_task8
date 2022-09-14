import React from "react";
import styled from "styled-components";

function RightBar() {
    return (
        <>
            <Container>
                <Heading>Tour meal plan</Heading>
            </Container>
        </>
    );
}

export default RightBar;
const Container = styled.section`
    width: 20%;
    padding: 20px;
    background-color: #f6f5fa;
`;
const Heading = styled.h1`
    font-size: 24px;
    font-weight: 700;
`;
