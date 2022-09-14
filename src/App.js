import React from "react";
import "./App.css";
import LeftBar from "./components/screens/LeftBar";
import Middle from "./components/screens/Middle";
import styled from "styled-components";
import RightBar from "./components/screens/RightBar";
function App() {
    return (
        <Main>
            <LeftBar />
            <Middle />
            <RightBar />
        </Main>
    );
}

export default App;
const Main = styled.section`
    display: flex;
`;
