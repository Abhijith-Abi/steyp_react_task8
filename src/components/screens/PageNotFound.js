import React from "react";
import styled from "styled-components";
import PageNotImg from "../../assets/images/pagenotfound.jpg";
function PageNotFound() {
    return (
        <>
            <Sectionmain>
                <Container>
                    <Message>Oops..! 404 Page Not Found</Message>
                    <PageMessage>
                        Looks like you came to wrong page on our server
                    </PageMessage>
                    <ImageContainer>
                        <Photo src={PageNotImg} alt="Image" />
                    </ImageContainer>
                </Container>
            </Sectionmain>
        </>
    );
}

export default PageNotFound;
const Sectionmain = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Container = styled.div`
    text-align: center;
`;
const Message = styled.h1`
    font-size: 34px;
    font-weight: bold;
    margin-bottom: 20px;
`;
const PageMessage = styled.p`
    font-size: 16px;
    color: var(--Orange);
    font-weight: 600;
`;
const ImageContainer = styled.div`
    width: 500px;
`;
const Photo = styled.img`
    display: block;
    width: 100%;
`;
