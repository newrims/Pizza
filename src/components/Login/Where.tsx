import styled from "styled-components"

import { useUserName } from "../../context/UserNameContext"
import { useAddress } from "../../context/AddressContext"

import Text from "./components/Text"
import NextButton from "./components/NextButton"
import LoginWrapper from "./components/LoginWrapper"
import AddressWrapper from "./components/AddressWrapper"

const TextWrapper = styled.div`
    margin: 100px 20px 30px;
`
const FlexWrapper = styled.div`
    display: flex;
`

export default function Where() {
    const { userName } = useUserName()
    const { dong } = useAddress()
    const isActive = dong !== ""
    return (
        <>
            <LoginWrapper>
                <TextWrapper>
                    <Text text={"좋은 이름이네요!"} />
                    <FlexWrapper>
                        <Text red={true} text={userName} />
                        <Text text={"는"} />
                    </FlexWrapper>
                    <Text text={"어디에 있나요?"} />
                </TextWrapper>
                <AddressWrapper />
            </LoginWrapper>
            <NextButton to="/select" isActive={isActive} />
        </>
    )
}
