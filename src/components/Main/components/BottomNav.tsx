import React from "react";
import styled from "styled-components";

import { ReactComponent as HomeIcon } from "../../../assets/icon/home-2-svgrepo-com.svg";
import { ReactComponent as FeedIcon } from "../../../assets/icon/feed-svgrepo-com.svg";
import { ReactComponent as StoreIcon } from "../../../assets/icon/store-svgrepo-com.svg";
import { ReactComponent as ChatIcon } from "../../../assets/icon/chat-empty-svgrepo-com.svg";
import { ReactComponent as MyPageIcon } from "../../../assets/icon/user-svgrepo-com.svg";

// IconWrapper에 isHome prop을 전달할 수 있도록 인터페이스 추가
interface IconWrapperProps {
    isHome?: boolean;
}

const IconWrapper = styled.div<IconWrapperProps>`
    width: 78px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        color: ${(props) => (props.isHome ? "rgba(205, 61, 63, 1)" : "rgba(234, 172, 100, 1)")};
        width: 100%;
        height: 100%;
        stroke-width: 1px;
    }
`;

type NavButton = {
    label: string;
    onClick: () => void;
};

const Navigation = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 600px;
    width: 100%;
    height: 80px;
    background-color: #ffffff;
    z-index: 1000;
`;

const NavItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

interface LabelProps {
    isHome?: boolean;
}

const Label = styled.div<LabelProps>`
    color: ${(props) => (props.isHome ? "rgba(205, 61, 63, 1)" : "rgba(234, 172, 100, 1)")}; /* 홈만 빨간색으로 */
    font-weight: ${(props) => (props.isHome ? "900" : "500")};
    font-size: 15px;
`;

const BottomNav: React.FC<{ buttons: NavButton[] }> = ({ buttons }) => {
    const icons = [<HomeIcon />, <FeedIcon />, <StoreIcon />, <ChatIcon />, <MyPageIcon />];

    return (
        <Navigation>
            {buttons.map((button, index) => (
                <NavItem key={index} onClick={button.onClick}>
                    {/* IconWrapper에 isHome prop 전달 */}
                    <IconWrapper isHome={button.label === "홈"}>{icons[index]}</IconWrapper>
                    <Label isHome={button.label === "홈"}>{button.label}</Label> {/* 홈만 빨간색으로 */}
                </NavItem>
            ))}
        </Navigation>
    );
};

export default BottomNav;
