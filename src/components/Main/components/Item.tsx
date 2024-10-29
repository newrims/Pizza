import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 259px;
    padding: 0;
    gap: 5px;
    justify-content:center;
    align-items:center;
`
const Rectangle = styled.div`
    width: 85vw;
    max-width:350px;
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

interface ItemProps {
    text?: string; 
}

export default function Item({ text = "" }: ItemProps) {
    return (
        <>
            <Wrapper>
                <TitleText>{text}</TitleText>
                <Rectangle />
            </Wrapper>
        </>
    )
}
