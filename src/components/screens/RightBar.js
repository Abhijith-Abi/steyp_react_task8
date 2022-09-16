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
                <SectionLaunch>
                    <LaunchHead>
                        <LaunchName>Launch</LaunchName>
                        <LaunchButton>Being orderd</LaunchButton>
                    </LaunchHead>
                    <LaunchTime>01.30AM</LaunchTime>
                    <LaunchCard>
                        <LListCard>
                            <LItemCard>
                                <LaunchCardImg>
                                    <LaunchImg
                                        src={require("../../assets/images/sideimg3.jpg")}
                                    />
                                </LaunchCardImg>
                                <LaunchDetials>
                                    <LItemName>Nasi Padang Patikraja</LItemName>
                                    <LItemPrice>
                                        <LOfferPrice>
                                            <M>$</M>8,10
                                        </LOfferPrice>
                                        <LNormalPrice>$10,10</LNormalPrice>
                                    </LItemPrice>
                                </LaunchDetials>
                            </LItemCard>
                            <LItemCard>
                                <LaunchCardImg>
                                    <LaunchImg
                                        src={require("../../assets/images/sideimg4.jpg")}
                                    />
                                </LaunchCardImg>
                                <LaunchDetials>
                                    <LItemName>Nasi Padang Patikraja</LItemName>
                                    <LItemPrice>
                                        <LOfferPrice>
                                            <M>$</M>8,10
                                        </LOfferPrice>
                                        <LNormalPrice>$10,10</LNormalPrice>
                                    </LItemPrice>
                                </LaunchDetials>
                            </LItemCard>
                        </LListCard>
                    </LaunchCard>
                </SectionLaunch>
                <SectionDinner>
                    <DinnerHead>
                        <DinnerName>Dinner</DinnerName>
                        <DinnerButton>Haven't orderd yet</DinnerButton>
                    </DinnerHead>
                    <DinnerTime>08.30AM</DinnerTime>
                    <DinnerCard>
                        <DinnerListCard>
                            <DinnerItemCard>
                                <DinnerCardImg>
                                    <DinnerImg
                                        src={require("../../assets/images/sideimg5.jpg")}
                                    />
                                </DinnerCardImg>
                                <DinnerDetials>
                                    <DinnerItemName>
                                        Nasi Padang Patikraja
                                    </DinnerItemName>
                                    <DinnerItemPrice>
                                        <DinnerOfferPrice>
                                            <B>$</B>8,10
                                        </DinnerOfferPrice>
                                        <DinnerNormalPrice>
                                            $10,10
                                        </DinnerNormalPrice>
                                    </DinnerItemPrice>
                                </DinnerDetials>
                            </DinnerItemCard>
                        </DinnerListCard>
                    </DinnerCard>
                </SectionDinner>
                <SectionUpload>
                    <Upload>
                        <UploadData>Drop here to add</UploadData>
                    </Upload>
                </SectionUpload>
            </Container>
        </>
    );
}

export default RightBar;
const Container = styled.section`
    width: 20%;
    padding: 20px;
    background-color: #f6f5fa;
    @media all and (max-width: 1440px) {
        padding: 10px;
    }
    @media all and (max-width: 1280px) {
        width: 30%;
    }
`;
const Heading = styled.h1`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
    @media all and (max-width: 1440px) {
        font-size: 22px;
    }
    @media all and (max-width: 1280px) {
        font-size: 28px;
        margin-bottom: 40px;
    }
    @media all and (max-width: 1050px) {
        margin-bottom: 20px;
    }
`;
const SectionDate = styled.div`
    border: 1px solid #dedddf;
    margin-bottom: 20px;
    border-radius: 6px;
    @media all and (max-width: 1280px) {
        font-size: 28px;
    }
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
    @media all and (max-width: 1440px) {
        width: 12px;
    }
    @media all and (max-width: 1280px) {
        width: 18px;
    }
`;
const DateIcon = styled.img`
    display: block;
    width: 100%;
    cursor: pointer;
`;
const Datename = styled.h6`
    font-size: 18px;
    color: #787878;
    @media all and (max-width: 1440px) {
        font-size: 14px;
    }
    @media all and (max-width: 1280px) {
        font-size: 20px;
    }
    @media all and (max-width: 1050px) {
        font-size: 18px;
    }
`;
const SectionBrakfast = styled.div``;
const BreakfastHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    @media all and (max-width: 1440px) {
        margin-bottom: 10px;
    }
    @media all and (max-width: 1280px) {
        margin-bottom: 20px;
    }
    @media all and (max-width: 1050px) {
        margin-bottom: 10px;
    }
`;
const BreakfastName = styled.h1`
    font-size: 24px;
    font-weight: 600;
    @media all and (max-width: 1440px) {
        font-size: 18px;
    }
    @media all and (max-width: 1280px) {
        font-size: 24px;
    }
`;
const BreakfastButton = styled.button`
    padding: 10px 16px;
    color: #76cc90;
    background: #d9ffe6;
    font-size: 16px;
    font-weight: 600;
    border-radius: 25px;
    cursor: pointer;
    @media all and (max-width: 1440px) {
        padding: 8px 12px;
        font-size: 14px;
    }
    @media all and (max-width: 1280px) {
        font-size: 16px;
    }
`;
const BreakfastTime = styled.h4`
    font-size: 18px;
    font-weight: 600;
    @media all and (max-width: 1440px) {
        font-size: 16px;
    }
    @media all and (max-width: 1280px) {
        font-size: 18px;
    }
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
    @media all and (max-width: 1440px) {
        margin: 10px 0px;
    }
    @media all and (max-width: 1280px) {
        margin: 30px 0px;
    }
    @media all and (max-width: 1050px) {
        margin: 20px 0px;
    }
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
    @media all and (max-width: 1440px) {
        padding: 5px;
    }
`;
const ItemName = styled.h2`
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
    @media all and (max-width: 1440px) {
        font-size: 14px;
        font-weight: 600;
    }
    @media all and (max-width: 1280px) {
        font-size: 18px;
    }
    @media all and (max-width: 1050px) {
        font-size: 16px;
    }
`;
const ItemPrice = styled.div`
    display: flex;
    align-items: center;
`;
const OfferPrice = styled.h2`
    font-size: 20px;
    font-weight: 500;
    @media all and (max-width: 1440px) {
        font-size: 16px;
    }
    @media all and (max-width: 1280px) {
        font-size: 18px;
    }
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
    @media all and (max-width: 1440px) {
        font-size: 16px;
    }
    @media all and (max-width: 1280px) {
        font-size: 18px;
    }
`;
// ===
const SectionLaunch = styled.div``;
const LaunchHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    @media all and (max-width: 1280px) {
        margin-bottom: 20px;
    }
`;
const LaunchName = styled.h1`
    font-size: 24px;
    font-weight: 600;
    @media all and (max-width: 1440px) {
        font-size: 20px;
    }
    @media all and (max-width: 1280px) {
        font-size: 24px;
    }
`;
const LaunchButton = styled.button`
    padding: 10px 16px;
    color: #e4c291;
    background: #fff2e1;
    font-size: 16px;
    font-weight: 600;
    border-radius: 25px;
    cursor: pointer;
    @media all and (max-width: 1440px) {
        padding: 8px 12px;
        font-size: 14px;
    }
    @media all and (max-width: 1280px) {
        font-size: 16px;
    }
`;
const LaunchTime = styled.h4`
    font-size: 18px;
    font-weight: 600;
    @media all and (max-width: 1440px) {
        font-size: 16px;
    }
    @media all and (max-width: 1280px) {
        font-size: 18px;
    }
`;
const LaunchCard = styled.div``;
const LListCard = styled.ul``;
const LItemCard = styled.li`
    background-color: #fff;
    border-radius: 6px;
    margin: 20px 0px;
    display: flex;
    padding: 2px;
    align-items: center;
    cursor: pointer;
    @media all and (max-width: 1440px) {
        margin: 10px 0px;
    }
    @media all and (max-width: 1280px) {
        margin: 30px 0px;
    }
    @media all and (max-width: 1050px) {
        margin: 20px 0px;
    }
`;
const LaunchCardImg = styled.div`
    width: 100px;
    border-radius: 6px;
    overflow: hidden;
`;
const LaunchImg = styled.img`
    display: block;
    width: 100%;
`;
const LaunchDetials = styled.div`
    width: 100%;
    margin: auto 0;
    padding: 10px;
    @media all and (max-width: 1440px) {
        padding: 5px;
    }
`;
const LItemName = styled.h2`
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
    @media all and (max-width: 1440px) {
        font-size: 14px;
    }
    @media all and (max-width: 1280px) {
        font-size: 18px;
    }
    @media all and (max-width: 1050px) {
        font-size: 16px;
    }
`;
const LItemPrice = styled.div`
    display: flex;
    align-items: center;
`;
const LOfferPrice = styled.h2`
    font-size: 20px;
    font-weight: 500;
    @media all and (max-width: 1440px) {
        font-size: 18px;
    }
    @media all and (max-width: 1280px) {
        font-size: 20px;
    }
`;
const M = styled.div`
    display: inline-block;
    color: var(--Orange);
`;
const LNormalPrice = styled.h4`
    margin-left: 18px;
    font-size: 18px;
    font-weight: 500;
    color: var(--Grey);
    text-decoration: line-through;
    @media all and (max-width: 1440px) {
        font-size: 16px;
    }
    @media all and (max-width: 1280px) {
        font-size: 20px;
    }
`;
// ===

const SectionDinner = styled.div``;
const DinnerHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    @media all and (max-width: 1280px) {
        margin-bottom: 20px;
    }
`;
const DinnerName = styled.h1`
    font-size: 24px;
    font-weight: 600;
    @media all and (max-width: 1440px) {
        font-size: 20px;
    }
    @media all and (max-width: 1280px) {
        font-size: 24px;
    }
`;
const DinnerButton = styled.button`
    padding: 10px 16px;
    color: #dd908b;
    background: #fee9e8;
    font-size: 14px;
    font-weight: 600;
    border-radius: 25px;
    cursor: pointer;
    @media all and (max-width: 1440px) {
        font-size: 12px;
        padding: 8px 12px;
    }
    @media all and (max-width: 1280px) {
        font-size: 14px;
    }
`;
const DinnerTime = styled.h4`
    font-size: 18px;
    font-weight: 600;
    @media all and (max-width: 1440px) {
        font-size: 16px;
    }
    @media all and (max-width: 1280px) {
        font-size: 18px;
    }
`;
const DinnerCard = styled.div``;
const DinnerListCard = styled.ul``;
const DinnerItemCard = styled.li`
    background-color: #fff;
    border-radius: 6px;
    margin: 20px 0px;
    display: flex;
    padding: 2px;
    align-items: center;
    cursor: pointer;
    @media all and (max-width: 1440px) {
        margin: 10px 0px;
    }
    @media all and (max-width: 1280px) {
        margin: 30px 0px;
    }
`;
const DinnerCardImg = styled.div`
    width: 100px;
    border-radius: 6px;
    overflow: hidden;
    @media all and (max-width: 1440px) {
        width: 90px;
    }
    @media all and (max-width: 1280px) {
        width: 100px;
    }
`;
const DinnerImg = styled.img`
    display: block;
    width: 100%;
`;
const DinnerDetials = styled.div`
    width: 100%;
    margin: auto 0;
    padding: 10px;
`;
const DinnerItemName = styled.h2`
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
    @media all and (max-width: 1440px) {
        font-size: 14px;
    }
    @media all and (max-width: 1280px) {
        font-size: 18px;
    }
    @media all and (max-width: 1050px) {
        font-size: 16px;
    }
`;
const DinnerItemPrice = styled.div`
    display: flex;
    align-items: center;
`;
const DinnerOfferPrice = styled.h2`
    font-size: 20px;
    font-weight: 500;
    @media all and (max-width: 1440px) {
        font-size: 18px;
    }
    @media all and (max-width: 1280px) {
        font-size: 20px;
    }
`;
const B = styled.div`
    display: inline-block;
    color: var(--Orange);
`;
const DinnerNormalPrice = styled.h4`
    margin-left: 18px;
    font-size: 18px;
    font-weight: 500;
    color: var(--Grey);
    text-decoration: line-through;
    @media all and (max-width: 1440px) {
        font-size: 16px;
    }
    @media all and (max-width: 1280px) {
        font-size: 22px;
    }
`;
// ==
const SectionUpload = styled.div``;
const Upload = styled.div`
    background-color: #ffecde;
    border: 2px dashed #edb68b;
    padding: 10px 20px;
    border-radius: 6px;
    @media all and (max-width: 1440px) {
        font-size: 16px;
        padding: 10px;
    }
    @media all and (max-width: 1280px) {
        font-size: 18px;
        padding: 30px 20px;
    }
`;
const UploadData = styled.h1`
    color: #df8844;
    font-size: 22px;
    font-weight: 500;
    text-align: center;
    line-height: 1.3em;
    @media all and (max-width: 1440px) {
        font-size: 20px;
    }
    @media all and (max-width: 1280px) {
        font-size: 22px;
    }
`;
