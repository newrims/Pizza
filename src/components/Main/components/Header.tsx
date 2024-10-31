import styled from "styled-components"

import { ReactComponent as Logosvg } from "../../../assets/logo/LogoTransverse.svg"
import { ReactComponent as Alarmsvg } from "../../../assets/icon/bell-svgrepo-com-2.svg"
import { ReactComponent as Cartsvg } from "../../../assets/icon/shopping-cart-svgrepo-com.svg"
import { Link } from "react-router-dom"

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 21px;
    background-color: #ffffff;
`
const Alarm = styled(Alarmsvg)`
    width: 45px;
    height: 45px;
    padding-right: 5px;
    color: ${({ theme }) => theme.color.red};
`
const Cart = styled(Cartsvg)`
    width: 45px;
    height: 45px;
    color: ${({ theme }) => theme.color.red};
`
const Logo = styled(Logosvg)`
    height: 45px;
`

export default function Header() {
    return (
        <HeaderWrapper>
            <Logo />
            <div>
                <Link to="/main/alarm">
                    <Alarm />
                </Link>
                <Cart />
            </div>
        </HeaderWrapper>
    )
}
