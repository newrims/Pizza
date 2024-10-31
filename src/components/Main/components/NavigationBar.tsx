import { ReactElement } from "react"
import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"

import { ReactComponent as HomeIcon } from "../../../assets/icon/home-2-svgrepo-com.svg"
import { ReactComponent as FeedIcon } from "../../../assets/icon/feed-svgrepo-com.svg"
import { ReactComponent as StoreIcon } from "../../../assets/icon/store-svgrepo-com.svg"
import { ReactComponent as ChatIcon } from "../../../assets/icon/chat-empty-svgrepo-com.svg"
import { ReactComponent as MyPageIcon } from "../../../assets/icon/user-svgrepo-com.svg"

const Navigation = styled.div`
    position: fixed;
    bottom: 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    max-width: 600px;
    width: 100%;
    height: 80px;
    background-color: #ffffff;
    z-index: 1000;
`
const ItemWrapper = styled.div<{ $isActive: boolean }>`
    color: ${({ $isActive, theme }) => ($isActive ? theme.color.red : theme.color.yellow)};
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
    cursor: pointer;
`
const Icon = styled.div`
    svg {
        width: 40px;
        height: 40px;
    }
`
const Label = styled.div`
    font-weight: 500;
    font-size: 12px;
`

interface ItemProps {
    icon: ReactElement
    label: string
    link: string
}
function Item({ icon, label, link }: ItemProps) {
    const location = useLocation()
    const isActive = location.pathname === `/main/${link}`

    return (
        <ItemWrapper $isActive={isActive}>
            <Link to={`/main/${link}`}>
                <Icon>{icon}</Icon>
                <Label>{label}</Label>
            </Link>
        </ItemWrapper>
    )
}

export default function NavigationBar() {
    return (
        <Navigation>
            <Item icon={<HomeIcon />} label={"홈"} link={"home"} />
            <Item icon={<FeedIcon />} label={"피드"} link={"feed"} />
            <Item icon={<StoreIcon />} label={"내가게"} link={"store"} />
            <Item icon={<ChatIcon />} label={"채팅"} link={"chat"} />
            <Item icon={<MyPageIcon />} label={"마이페이지"} link={"mypage"} />
        </Navigation>
    )
}
