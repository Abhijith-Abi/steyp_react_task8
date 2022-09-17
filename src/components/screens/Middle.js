import React from "react";
import styled from "styled-components";
import Serach from "../../assets/images/Food-Site-1.svg";
import { Link } from "react-router-dom";
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
                                <ItemHed>
                                    <Link to="pagenotfound">Menu</Link>
                                </ItemHed>
                            </List>
                        </Item>
                        <Item>
                            <List>
                                <ItemHed>
                                    <Link to="pagenotfound">Meal plans</Link>
                                </ItemHed>
                            </List>
                        </Item>
                        <Item>
                            <List>
                                <ItemHed>
                                    <Link to="pagenotfound">Delivery</Link>
                                </ItemHed>
                            </List>
                        </Item>
                    </Items>
                    <Items>
                        <Item>
                            <List>
                                <SearchContainer isSearching>
                                    <SearchIconButton
                                    // onClick={_toggleSearch}
                                    >
                                        {/* {isActive ? { Serach } : { Serach }} */}
                                        <SearchImg src={Serach} />
                                    </SearchIconButton>
                                    <SearchInput placeholder="Search your food..." />
                                </SearchContainer>
                            </List>
                        </Item>
                    </Items>
                </SectionHeader>
                <SectionTop>
                    <MeetHed>Find the menu you want</MeetHed>
                    <Datas>
                        <Data>
                            <Contents>
                                <Link to="/">Recomended</Link>
                            </Contents>
                        </Data>
                        <Data>
                            <Contents>
                                <Link to="breakfast">Breakfast</Link>
                            </Contents>
                        </Data>
                        <Data>
                            <Contents>
                                <Link to="lunch">Lunch</Link>
                            </Contents>
                        </Data>
                        <Data>
                            <Contents>
                                <Link to="dinner">Dinner</Link>
                            </Contents>
                        </Data>
                        <Data>
                            <Contents>
                                <Link to="icecream">Ice Cream</Link>
                            </Contents>
                        </Data>
                        <Data>
                            <Contents>
                                <Link to="coffee">Coffee</Link>
                            </Contents>
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
    @media all and (max-width: 1280px) {
        width: 60%;
    }
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
    @media all and (max-width: 1280px) {
        &:last-child {
            display: none;
        }
    }
`;
const Item = styled.li`
    margin-left: 50px;
    &:first-child {
        margin-left: 0px;
    }
    @media all and (max-width: 1440px) {
        margin-left: 30px;
    }
    @media all and (max-width: 1280px) {
        margin-right: 20px;
    }
    @media all and (max-width: 1050px) {
        margin-right: 2px;
    }
`;

const List = styled.div``;

const Heding = styled.h1`
    font-weight: bold;
    font-size: 34px;
    margin-bottom: 10px;
    @media all and (max-width: 1440px) {
        font-size: 28px;
    }
    @media all and (max-width: 1280px) {
        font-size: 24px;
    }
`;
const SubHed = styled.h6`
    font-size: 16px;
    font-weight: bold;
    color: var(--Grey);
    cursor: pointer;
    @media all and (max-width: 1440px) {
        font-size: 14px;
    }
    @media all and (max-width: 1280px) {
        font-size: 12px;
    }
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
const SectionTop = styled.section``;
const MeetHed = styled.h1`
    font-weight: 600;
    font-size: 24px;
    @media all and (max-width: 1280px) {
        font-size: 22px;
    }
`;
const Datas = styled.ul`
    display: flex;
    align-items: center;
    margin-top: 20px;
`;
const Data = styled.li`
    border-bottom: 2px solid #fff;
    margin-right: 115px;
    cursor: pointer;
    &:hover {
        border-bottom: 2px solid var(--Orange);
        transition: 0.5s ease-in;
    }
    &:last-child {
        margin-right: 0px;
    }
    @media all and (max-width: 1440px) {
        margin-right: 80px;
    }
    @media all and (max-width: 1280px) {
        margin-right: 40px;
    }
    @media all and (max-width: 1050px) {
        margin-right: 36px;
    }
`;

const SearchContainer = styled.div`
    position: relative;
    height: 48px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s ease;
    margin: 0 auto;
`;
const SearchIconButton = styled.button`
    position: absolute;
    top: 13px;
    left: 210px;
    border: none;
    img {
        width: 100%;
        display: block;
    }
`;
const SearchImg = styled.img``;
const SearchInput = styled.input`
    height: 75%;
    border-radius: 25px;
    padding: 1px 25px;
    margin-right: 20px;
    background-color: var(--Black);
`;
const Contents = styled.h4`
    font-size: 18px;
    color: var(--Grey);
    margin-bottom: 10px;
    &:hover {
        font-weight: 500;
        color: #000;
    }
    @media all and (max-width: 1280px) {
        font-size: 16px;
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
    @media all and (max-width: 1280px) {
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 10px;
        grid-template-rows: repeat(3, 1fr);
    }
`;
const Grid1 = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    background-color: var(--Black);
    border-radius: 10px;
    overflow: hidden;
    @media all and (max-width: 1280px) {
        grid-area: 1 / 1 / 2 / 2;
    }
`;
const Grid2 = styled.div`
    grid-area: 1 / 2 / 2 / 3;
    background-color: var(--Black);
    border-radius: 10px;
    overflow: hidden;
    @media all and (max-width: 1280px) {
        grid-area: 1 / 2 / 2 / 3;
    }
`;
const Grid3 = styled.div`
    grid-area: 1 / 3 / 2 / 4;
    background-color: var(--Black);
    border-radius: 10px;
    overflow: hidden;
    @media all and (max-width: 1280px) {
        grid-area: 2 / 1 / 3 / 2;
    }
`;
const Grid4 = styled.div`
    grid-area: 2 / 1 / 3 / 2;
    background-color: var(--Black);
    border-radius: 10px;
    overflow: hidden;
    @media all and (max-width: 1280px) {
        grid-area: 2 / 2 / 3 / 3;
    }
`;
const Grid5 = styled.div`
    grid-area: 2 / 2 / 3 / 3;
    background-color: var(--Black);
    border-radius: 10px;
    overflow: hidden;
    @media all and (max-width: 1280px) {
        grid-area: 3 / 1 / 4 / 2;
    }
`;
const Grid6 = styled.div`
    grid-area: 2 / 3 / 3 / 4;
    background-color: var(--Black);
    border-radius: 10px;
    overflow: hidden;
    @media all and (max-width: 1280px) {
        grid-area: 3 / 2 / 4 / 3;
    }
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
    @media all and (max-width: 1440px) {
        font-size: 18px;
    }
    @media all and (max-width: 1050px) {
        padding: 12px 30px;
    }
`;
const PriceSection = styled.ul`
    display: flex;
    padding: 10px 30px;
`;
const ListSection = styled.li``;
const DiscountPrice = styled.h2`
    font-size: 20px;
    font-weight: 500;
    @media all and (max-width: 1440px) {
        font-size: 18px;
    }
`;
const S = styled.span`
    color: var(--Orange);
`;
const ActualPrice = styled.h4`
    margin-left: 18px;
    font-size: 14px;
    font-weight: 500;
    color: var(--Grey);
    text-decoration: line-through;
    @media all and (max-width: 1440px) {
        margin-left: 10px;
    }
`;
const PlceOrder = styled.button`
    margin-left: 80px;
    color: #fff;
    background-color: var(--Orange);
    padding: 4px 12px;
    border-radius: 25px;
    cursor: pointer;
    @media all and (max-width: 1440px) {
        margin-left: 50px;
    }
`;

// ===
