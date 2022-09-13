import React from "react";
import styled from "styled-components";

function Middle() {
    return (
        <>
            <Container>
                <SectionHeader>
                    <Items>
                        <Item>
                            <Hed>
                                <Heding>Welcome, Epan Danis!</Heding>
                                <SubHed>
                                    Dont't forget to have breakfast today
                                    yeahhh!
                                </SubHed>
                            </Hed>
                        </Item>
                    </Items>
                    <Items>
                        <Item>
                            <List>
                                <ItemHed>Menu</ItemHed>
                            </List>
                        </Item>
                        <Item>
                            <List>
                                <ItemHed>Meal plans</ItemHed>
                            </List>
                        </Item>
                        <Item>
                            <List>
                                <ItemHed>Delivery</ItemHed>
                            </List>
                        </Item>
                    </Items>
                    <Items>
                        <Item>
                            <List>
                                <ItemHeds>
                                    <input
                                        placeholder="Search your food..."
                                        value=""
                                    />
                                    <SrechIcon
                                        src={
                                            require("../../assets/images/Food-Site-1.svg")
                                                .default
                                        }
                                    />
                                </ItemHeds>
                            </List>
                        </Item>
                    </Items>
                </SectionHeader>
                <SectionTop>
                    <MeetHed>Find the menu you want</MeetHed>
                    <Datas>
                        <Data>
                            <Contents>Recomended</Contents>
                        </Data>
                        <Data>
                            <Contents>Breakfast</Contents>
                        </Data>
                        <Data>
                            <Contents>Lunch</Contents>
                        </Data>
                        <Data>
                            <Contents>Dinner</Contents>
                        </Data>
                        <Data>
                            <Contents>Ice Cream</Contents>
                        </Data>
                        <Data>
                            <Contents>Coffee</Contents>
                        </Data>
                    </Datas>
                    <Hr />
                </SectionTop>
            </Container>
        </>
    );
}

export default Middle;
const Container = styled.section`
    width: 70%;
`;
const SectionHeader = styled.header`
    padding: 30px 0px;
    display: flex;
    justify-content: space-between;
`;
const Hed = styled.div``;
const Items = styled.ul`
    display: flex;
    align-items: center;
`;
const Item = styled.li`
    margin-left: 50px;
    &:first-child {
        margin-left: 0px;
    }
`;

const List = styled.div``;
const SrechIcon = styled.img`
    width: 20px;
`;
const Heding = styled.h1`
    font-weight: bold;
    font-size: 34px;
    margin-bottom: 10px;
`;
const SubHed = styled.h6`
    font-size: 16px;
    font-weight: bold;
    color: var(--Grey);
    cursor: pointer;
`;
const ItemHed = styled.h4`
    font-size: 14px;
    padding: 10px;
    color: var(--Grey);
    cursor: pointer;
    background-color: var(--Black);
    border-radius: 20px;
    &:hover {
        color: #fff;
        background-color: var(--Orange);
    }
`;
const ItemHeds = styled.h4`
    font-size: 14px;
    padding: 10px;
    color: var(--Grey);
    cursor: pointer;
    background-color: var(--Black);
    border-radius: 20px;
`;
const SectionTop = styled.section``;
const MeetHed = styled.h1`
    font-weight: 600;
    font-size: 24px;
`;
const Datas = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    border-bottom: 1px solid #000;
`;
const Data = styled.li`
    border-bottom: 1px solid #000;
    &:hover {
        color: #000;
        font-weight: 500;
        border-bottom: 3px solid var(--Orange);
    }
`;
const Contents = styled.h4`
    font-size: 18px;
    color: var(--Grey);
`;
const Hr = styled.hr``;
