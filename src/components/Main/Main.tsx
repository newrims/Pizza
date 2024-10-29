import styled from "styled-components"

import { ReactComponent as Logosvg } from "../../assets/logo/LogoTransverse.svg"
import { ReactComponent as Alarmsvg } from "../../assets/icon/bell-svgrepo-com-2.svg"
import { ReactComponent as Cartsvg } from "../../assets/icon/shopping-cart-svgrepo-com.svg"
import { ReactComponent as Searchsvg } from "../../assets/icon/search-svgrepo-com.svg"

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`
const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 21px;
    background-color: #ffffff;
`
const IconWrapper = styled.div`
    display: flex;
    height: 45px;
    gap: 2px;
`
const AlarmIcon = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    background-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    color: rgba(205, 61, 63, 1);
    svg {
        width: 38px;
        height: 45px;
    }
`

const ShoppingcartIcon = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    background-color: transparent;
    border: none;
    padding: 5px;
    cursor: pointer;
    color: rgba(205, 61, 63, 1);
    svg {
        width: 38px;
        height: 35px;
    }
`
const Logo = styled(Logosvg)`
    height: 45px;
`
const MainPageWrapper = styled.div`
    position: relative;
    width: 100%;
    justify-content: center;
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;
    min-height: 100vh;
    align-items: center;
`
const SearchWrapper = styled.div`
    display: flex;
    width: 350px;
    height: 50px;
    border-radius: 26.5px;
    justify-content: space-around;
    background-color: rgba(229, 229, 229, 1);
    border: 2px solid rgba(235, 172, 100, 1);
    margin: 20px;
`
const Input = styled.input`
    width: 250px;
    border-radius: 26.5px;
    background-color: rgba(229, 229, 229, 1);
    font-size: 20px;
    color: #333;
    font-weight: 600;
    /* "지금 읽고 싶은 책이 있나요? */
    &::placeholder {
        color: #afafaf;
        size: 25pt;
    }
    &:focus {
        outline: none;
        border-color: rgba(235, 172, 100, 1); /* 포커스 시 테두리 색상 */
    }
`
const SearchIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: rgba(205, 61, 63, 1);
    svg {
        width: 40px;
        height: 40px;
    }
`

const Rectangle = styled.div`
    width: 350px;
    height: 215px;
    background-color: #ffffff;
    border-radius: 23px;
`

const TitleText = styled.h2`
    font-size: 30px;
    font-weight: bold;
    color: #000000;
    text-align: left;
    letter-spacing: -0.2px;
    width: 350px;
    height: 39px;
    display: flex;
    align-items: center;
    margin: 0;
`

const Session1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 259px;
    padding: 0;
    gap: 5px;
`

const Session2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 259px;
    padding: 0;
    gap: 5px;
    margin-top: 25px;
`

const BottomWrapper = styled.div`   
    position: relative;
    weight: 393px;
    height: 190px;
`
const Navigation = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 393px;
    height: 60px;
    background-color: #ffffff;
    box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.1);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto; /* 가운데 정렬 */
    z-index: 1000;
`

const PpizzangBot = styled.button`
    width: 97px;
    height: 97px;
    background-color: #ffffff;
    border-radius: 48.5px;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16);
    border: none;
    cursor: pointer;

    /* 각 코너별 반경 설정 */
    border-top-left-radius: 48.5px;
    border-bottom-left-radius: 48.5px;
    border-bottom-right-radius: 15.5px; /* SwiftUI와 최대한 비슷하게 설정 */
    border-top-right-radius: 48.5px;

    /* 위치 설정 */
    position: fixed;
    bottom: 100px; 
    z-index: 1000; /* 다른 요소 위에 표시되도록 설정 */
`

export default function Main() {
    return (
        <Wrapper>
            <HeaderWrapper>
                <Logo />
                <IconWrapper>
                    <AlarmIcon>
                        <Alarmsvg />
                    </AlarmIcon>
                    <ShoppingcartIcon>
                        <Cartsvg />
                    </ShoppingcartIcon>
                </IconWrapper>
            </HeaderWrapper>
            <MainPageWrapper>
                <SearchWrapper>
                    <Input placeholder="지금 읽고 싶은 책이 있나요?" />
                    <SearchIcon>
                        <Searchsvg />
                    </SearchIcon>
                </SearchWrapper>
                <Session1>
                    <TitleText>우리동네 핫한🔥 책장</TitleText>
                    <Rectangle />
                </Session1>
                <Session2>
                    <TitleText>지금 인기있는 베스트셀러</TitleText>
                    <Rectangle />
                </Session2>
                <BottomWrapper>
                    <PpizzangBot />
                    <Navigation></Navigation>
                </BottomWrapper>
            </MainPageWrapper>
            
        </Wrapper>
    )
}
