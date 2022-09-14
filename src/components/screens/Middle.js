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
                                <ItemHeds style={{ marginRight: "50px" }}>
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
                <SectionCategory>
                    <MenuItems>
                        <Grid1>
                            <ImgContainer>
                                <Photo
                                    src={require("../../assets/images/img1.jpg")}
                                />
                            </ImgContainer>
                            <ItemName>Nasi Goreng Pak Parjo</ItemName>
                            <PriceSection>
                                <ListSection>
                                    <DiscountPrice>
                                        <S>$</S>8,10
                                    </DiscountPrice>
                                </ListSection>
                                <ListSection>
                                    <ActualPrice>$10,10</ActualPrice>
                                </ListSection>
                                <ListSection>
                                    <PlceOrder>Oder</PlceOrder>
                                </ListSection>
                            </PriceSection>
                        </Grid1>
                        <Grid2>
                            <ImgContainer>
                                <Photo
                                    src={require("../../assets/images/img2.jpg")}
                                />
                            </ImgContainer>
                            <ItemName>Nasi Goreng Pak Parjo</ItemName>
                            <PriceSection>
                                <ListSection>
                                    <DiscountPrice>
                                        <S>$</S>9,10
                                    </DiscountPrice>
                                </ListSection>
                                <ListSection>
                                    <ActualPrice>$12,10</ActualPrice>
                                </ListSection>
                                <ListSection>
                                    <PlceOrder>Oder</PlceOrder>
                                </ListSection>
                            </PriceSection>
                        </Grid2>
                        <Grid3>
                            <ImgContainer>
                                <Photo
                                    src={require("../../assets/images/img3.jpg")}
                                />
                            </ImgContainer>
                            <ItemName>Nasi Goreng Pak Parjo</ItemName>
                            <PriceSection>
                                <ListSection>
                                    <DiscountPrice>
                                        <S>$</S>5,60
                                    </DiscountPrice>
                                </ListSection>
                                <ListSection>
                                    <ActualPrice>$10,24</ActualPrice>
                                </ListSection>
                                <ListSection>
                                    <PlceOrder>Oder</PlceOrder>
                                </ListSection>
                            </PriceSection>
                        </Grid3>
                        <Grid4>
                            <ImgContainer>
                                <Photo
                                    src={require("../../assets/images/img4.jpg")}
                                />
                            </ImgContainer>
                            <ItemName>Nasi Goreng Pak Parjo</ItemName>
                            <PriceSection>
                                <ListSection>
                                    <DiscountPrice>
                                        <S>$</S>9,24
                                    </DiscountPrice>
                                </ListSection>
                                <ListSection>
                                    <ActualPrice>$10,10</ActualPrice>
                                </ListSection>
                                <ListSection>
                                    <PlceOrder>Oder</PlceOrder>
                                </ListSection>
                            </PriceSection>
                        </Grid4>
                        <Grid5>
                            <ImgContainer>
                                <Photo
                                    src={require("../../assets/images/img5.jpg")}
                                />
                            </ImgContainer>
                            <ItemName>Nasi Goreng Pak Parjo</ItemName>
                            <PriceSection>
                                <ListSection>
                                    <DiscountPrice>
                                        <S>$</S>8,10
                                    </DiscountPrice>
                                </ListSection>
                                <ListSection>
                                    <ActualPrice>$10,10</ActualPrice>
                                </ListSection>
                                <ListSection>
                                    <PlceOrder>Oder</PlceOrder>
                                </ListSection>
                            </PriceSection>
                        </Grid5>
                        <Grid6>
                            <ImgContainer>
                                <Photo
                                    src={require("../../assets/images/img6.jpg")}
                                />
                            </ImgContainer>
                            <ItemName>Nasi Goreng Pak Parjo</ItemName>
                            <PriceSection>
                                <ListSection>
                                    <DiscountPrice>
                                        <S>$</S>18,00
                                    </DiscountPrice>
                                </ListSection>
                                <ListSection>
                                    <ActualPrice>$20.05</ActualPrice>
                                </ListSection>
                                <ListSection>
                                    <PlceOrder>Oder</PlceOrder>
                                </ListSection>
                            </PriceSection>
                        </Grid6>
                    </MenuItems>
                </SectionCategory>
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
    justify-content: space-evenly;
    align-items: center;
    margin-top: 20px;
`;
const Data = styled.li`
    border-bottom: 2px solid #fff;
    cursor: pointer;
    &:hover {
        border-bottom: 2px solid var(--Orange);
        transition: 0.5s ease-in;
    }
`;
const Contents = styled.h4`
    font-size: 18px;
    color: var(--Grey);
    margin-bottom: 10px;
    &:hover {
        font-weight: 500;
        color: #000;
    }
`;
const Hr = styled.hr`
    border-bottom: 2px solid var(--Black);
`;
const SectionCategory = styled.section``;
const MenuItems = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    padding: 20px;
`;
const Grid1 = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    background-color: var(--Black);
    border-radius: 10px;
    overflow: hidden;
`;
const Grid2 = styled.div`
    grid-area: 1 / 2 / 2 / 3;
    background-color: var(--Black);
    border-radius: 10px;
    overflow: hidden;
`;
const Grid3 = styled.div`
    grid-area: 1 / 3 / 2 / 4;
    background-color: var(--Black);
    border-radius: 10px;
    overflow: hidden;
`;
const Grid4 = styled.div`
    grid-area: 2 / 1 / 3 / 2;
    background-color: var(--Black);
    border-radius: 10px;
    overflow: hidden;
`;
const Grid5 = styled.div`
    grid-area: 2 / 2 / 3 / 3;
    background-color: var(--Black);
    border-radius: 10px;
    overflow: hidden;
`;
const Grid6 = styled.div`
    grid-area: 2 / 3 / 3 / 4;
    background-color: var(--Black);
    border-radius: 10px;
    overflow: hidden;
`;
const ImgContainer = styled.div``;
const Photo = styled.img`
    display: block;
    width: 100%;
`;
const ItemName = styled.h4`
    font-size: 16px;
    font-weight: 600;
    padding: 20px 30px;
`;
const PriceSection = styled.ul`
    display: flex;
    padding: 5px 30px;
`;
const ListSection = styled.li``;
const DiscountPrice = styled.h2`
    font-size: 20px;
    font-weight: 500;
`;
const S = styled.span`
    color: var(--Orange);
`;
const ActualPrice = styled.h4`
    margin-left: 18px;
    font-size: 14px;
    font-weight: 500;
    color: var(--Grey);
`;
const PlceOrder = styled.button`
    margin-left: 80px;
    color: #fff;
    background-color: var(--Orange);
    padding: 4px 12px;
    border-radius: 25px;
`;
