import React from "react";
import styled from "styled-components";
import Hero from "../../assets/images/Logo.svg";
import MenuIcon from "../../assets/images/Menu-White.svg";
import ProfileIcon from "../../assets/images/man_icon.jpg";

function LeftBar() {
    return (
        <>
            <Container>
                <SectionTop>
                    <Logo>
                        <LogoImg src={Hero} alt="Logo_Img" />
                    </Logo>
                </SectionTop>
                <SectionMiddle>
                    <Items>
                        <Item>
                            <Menu>
                                <Icons src={MenuIcon} alt="MenuIcon" />
                            </Menu>
                        </Item>
                        <Item>
                            <Menu>
                                <Icons
                                    src={
                                        require("../../assets/images/Menu_Icon-1.svg")
                                            .default
                                    }
                                />
                            </Menu>
                        </Item>
                        <Item>
                            <Menu>
                                <Icons
                                    src={
                                        require("../../assets/images/Love.svg")
                                            .default
                                    }
                                />
                            </Menu>
                        </Item>
                        <Item>
                            <Menu>
                                <Icons
                                    src={
                                        require("../../assets/images/Shape.svg")
                                            .default
                                    }
                                />
                            </Menu>
                        </Item>
                        <Item>
                            <Menu>
                                <Icons
                                    src={
                                        require("../../assets/images/Cart.svg")
                                            .default
                                    }
                                />
                            </Menu>
                        </Item>
                        <Item>
                            <Menu>
                                <Icons
                                    src={
                                        require("../../assets/images/Settings.svg")
                                            .default
                                    }
                                />
                            </Menu>
                        </Item>
                        <Item>
                            <Menu>
                                <Icons
                                    src={
                                        require("../../assets/images/Profile.svg")
                                            .default
                                    }
                                />
                            </Menu>
                        </Item>
                        <Item>
                            <Menu>
                                <Icons
                                    src={
                                        require("../../assets/images/exclamation.svg")
                                            .default
                                    }
                                />
                            </Menu>
                        </Item>
                    </Items>
                </SectionMiddle>
                <Bottom>
                    <ProImg src={ProfileIcon} alt="ManIcons" />
                </Bottom>
            </Container>
        </>
    );
}

export default LeftBar;
const Container = styled.section`
    width: 10%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
`;
const SectionTop = styled.div``;
const Logo = styled.h1`
    width: 60px;
    display: inline-block;
    margin-top: 20px;
    cursor: pointer;
`;
const LogoImg = styled.img`
    display: block;
    width: 100%;
`;
const SectionMiddle = styled.div``;
const Items = styled.ul`
    background-color: var(--Orange);
    padding: 10px;
    border-radius: 50px;
`;
const Item = styled.li`
    padding: 10px;
    border-radius: 50%;
    margin-bottom: 5px;
    cursor: pointer;
    &:last-child {
        margin-bottom: 0;
    }
    &:hover {
        background-color: #f68634;
        transition: 1s;
    }
`;
const Menu = styled.div`
    width: 20px;
`;
const Icons = styled.img`
    display: block;
    width: 100%;
`;
const Bottom = styled.div`
    width: 60px;
    margin-bottom: 20px;
`;
const ProImg = styled.img`
    display: block;
    width: 100%;
    border-radius: 50%;
    cursor: pointer;
`;
