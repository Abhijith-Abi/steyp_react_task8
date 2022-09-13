import React from "react";
import "./App.css";
import LeftBar from "./components/screens/LeftBar";
import Middle from "./components/screens/Middle";
import styled from "styled-components";
function App() {
    return (
        <Main>
            <LeftBar />
            <Middle />
        </Main>
    );
}

export default App;
const Main = styled.section`
    display: flex;
`;
