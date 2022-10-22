import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeftBar from "./components/screens/LeftBar";
import Middle from "./components/screens/Middle";
import styled from "styled-components";
import RightBar from "./components/screens/RightBar";
import BreakFast from "./components/screens/BreakFast";
import Dinner from "./components/screens/Dinner";
import IceCream from "./components/screens/IceCream";
import Coffee from "./components/screens/Coffee";
import PageNotFound from "./components/screens/PageNotFound";
import Lunch from "./components/screens/Lunch";
function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Main>
                            <LeftBar />
                            <Middle />
                            <RightBar />
                        </Main>
                    }
                />
                <Route
                    path="/react_exam_task8"
                    element={
                        <Main>
                            <LeftBar />
                            <Middle />
                            <RightBar />
                        </Main>
                    }
                />
                <Route path="/breakfast" element={<BreakFast />} />
                <Route path="/lunch" element={<Lunch />} />
                <Route path="/coffee" element={<Coffee />} />
                <Route path="/dinner" element={<Dinner />} />
                <Route path="/icecream" element={<IceCream />} />
                <Route path="*" element={<PageNotFound />} />
                <Route path="/pagenotfound" element={<PageNotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
const Main = styled.section`
    display: flex;
    @media all and (max-width: 640px) {
        flex-direction: row;
    }
`;
