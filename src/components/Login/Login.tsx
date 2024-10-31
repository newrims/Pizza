import React, { useEffect } from "react"
import styled from "styled-components"
import { Link, useSearchParams, useNavigate } from "react-router-dom"

import { ReactComponent as Charactersvg } from "../../assets/character/TongueRed.svg"
import { ReactComponent as Logosvg } from "../../assets/logo/LogoTransverse.svg"

import FadeIn from "./components/FadeIn"

const IconWrapper = styled.div`
    margin-top: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Logo = styled(Logosvg)`
    width: 100%;
`
const Character = styled(Charactersvg)`
    margin-top: 40px;
    width: 80%;
`
const ButtonWrapper = styled.div`
    position: absolute;
    bottom: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const KakaoLogin = styled.button`
    width: 331px;
    height: 64px;
    background-color: rgb(250, 225, 0);
    border-radius: 13px;
    font-size: 22px;
    color: #3c1e1e;
`
const OtherLogin = styled.button`
    font-size: 12px;
    text-decoration: underline;
    color: rgb(88, 88, 88);
    margin-top: 20px;
`
export default function Login() {
    const KAKAO_KEY = process.env.REACT_APP_KAKAO_KEY
    const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

    let [query] = useSearchParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (query.get("code")) {
            navigate("./name")
        }
    }, [query, navigate])

    const onClick = () => {
        window.location.href = link
    }

    return (
        <>
            <FadeIn delay="0.5s">
                <IconWrapper>
                    <Logo />
                    <Character />
                </IconWrapper>
            </FadeIn>
            <ButtonWrapper>
                <FadeIn delay="0.5s">
                    <KakaoLogin onClick={onClick}>{"카카오로 시작하기"}</KakaoLogin>
                </FadeIn>
                <FadeIn delay="0.5s">
                    <OtherLogin>
                        <Link to="/name">{"다른 계정으로 로그인하기"}</Link>
                    </OtherLogin>
                </FadeIn>
                <Link to="/main/home">메인으로가기</Link>
            </ButtonWrapper>
        </>
    )
}
