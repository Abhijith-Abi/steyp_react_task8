import React from "react";
import styled from "styled-components";

function RightBar() {
    return (
        <>
            <Container>
                <Heading>Tour meal plan</Heading>
                <SectionDate>
                    <List>
                        <Items>
                            <DateIconcontainer>
                                <DateIcon
                                    src={
                                        require("../../assets/images/calander.svg")
                                            .default
                                    }
                                />
                            </DateIconcontainer>
                        </Items>
                        <Items>
                            <Datename>Today, 08 Aug 2022</Datename>
                        </Items>
                        <Items>
                            <DateIconcontainer>
                                <DateIcon
                                    src={
                                        require("../../assets/images/downarrow.svg")
                                            .default
                                    }
                                />
                            </DateIconcontainer>
                        </Items>
                    </List>
                </SectionDate>
                <SectionBrakfast>
                    <BreakfastHead>
                        <BreakfastName>Breakfast</BreakfastName>
                        <BreakfastButton>Purchaced</BreakfastButton>
                    </BreakfastHead>
                    <BreakfastTime>06.30AM</BreakfastTime>
                    <BreakfastCard>
                        <ListCard>
                            <ItemCard>
                                <BreakfastCardImg>
                                    <BrakfastImg
                                        src={require("../../assets/images/sideimg1.jpg")}
                                    />
                                </BreakfastCardImg>
                                <BreakfastDetials>
                                    <ItemName>Nasi Padang Patikraja</ItemName>
                                    <ItemPrice>
                                        <OfferPrice>
                                            <S>$</S>8,10
                                        </OfferPrice>
                                        <NormalPrice>$10,10</NormalPrice>
                                    </ItemPrice>
                                </BreakfastDetials>
                            </ItemCard>
                            <ItemCard>
                                <BreakfastCardImg>
                                    <BrakfastImg
                                        src={require("../../assets/images/sideimg2.jpg")}
                                    />
                                </BreakfastCardImg>
                                <BreakfastDetials>
                                    <ItemName>Nasi Padang Patikraja</ItemName>
                                    <ItemPrice>
                                        <OfferPrice>
                                            <S>$</S>8,10
                                        </OfferPrice>
                                        <NormalPrice>$10,10</NormalPrice>
                                    </ItemPrice>
                                </BreakfastDetials>
                            </ItemCard>
                        </ListCard>
                    </BreakfastCard>
                </SectionBrakfast>
                <SectionLunch></SectionLunch>
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
    margin-bottom: 10px;
`;
const SectionDate = styled.div`
    border: 1px solid #dedddf;
    margin-bottom: 20px;
`;
const List = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`;
const Items = styled.li``;
const DateIconcontainer = styled.div`
    width: 18px;
`;
const DateIcon = styled.img`
    display: block;
    width: 100%;
    cursor: pointer;
`;
const Datename = styled.h6`
    font-size: 18px;
    color: #787878;
`;
const SectionBrakfast = styled.div``;
const BreakfastHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;
const BreakfastName = styled.h1`
    font-size: 24px;
    font-weight: 600;
`;
const BreakfastButton = styled.button`
    padding: 10px 16px;
    color: #76cc90;
    background: #d9ffe6;
    font-size: 16px;
    font-weight: 600;
    border-radius: 25px;
    cursor: pointer;
`;
const BreakfastTime = styled.h4`
    font-size: 18px;
    font-weight: 600;
`;
const BreakfastCard = styled.div``;
const ListCard = styled.ul``;
const ItemCard = styled.li`
    background-color: #fff;
    border-radius: 6px;
    margin: 20px 0px;
    display: flex;
    padding: 2px;
    align-items: center;
    cursor: pointer;
`;
const BreakfastCardImg = styled.div`
    width: 100px;
    border-radius: 6px;
    overflow: hidden;
`;
const BrakfastImg = styled.img`
    display: block;
    width: 100%;
`;
const BreakfastDetials = styled.div`
    width: 100%;
    margin: auto 0;
    padding: 10px;
`;
const ItemName = styled.h2`
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
`;
const ItemPrice = styled.div`
    display: flex;
    align-items: center;
`;
const OfferPrice = styled.h2`
    font-size: 20px;
    font-weight: 500;
`;
const S = styled.div`
    display: inline-block;
    color: var(--Orange);
`;
const NormalPrice = styled.h4`
    margin-left: 18px;
    font-size: 18px;
    font-weight: 500;
    color: var(--Grey);
    text-decoration: line-through;
`;
const SectionLunch = styled.div``;
