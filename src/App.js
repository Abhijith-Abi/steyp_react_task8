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
                    exact
                    path="/"
                    element={
                        <Main>
                            <LeftBar />
                            <Middle />
                            <RightBar />
                        </Main>
                    }
                />
                <Route exact path="/breakfast" element={<BreakFast />} />
                <Route exact path="/lunch" element={<Lunch />} />
                <Route exact path="/coffee" element={<Coffee />} />
                <Route exact path="/dinner" element={<Dinner />} />
                <Route exact path="/icecream" element={<IceCream />} />
                <Route exact path="*" element={<PageNotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
const Main = styled.section`
    display: flex;
`;
