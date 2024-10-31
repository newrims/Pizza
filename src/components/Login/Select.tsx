import styled from "styled-components"
import { useState } from "react"

import Text from "./components/Text"
import LoginWrapper from "./components/LoginWrapper"
import NextButton from "./components/NextButton"
import Item from "./components/Item"
import FadeIn from "./components/FadeIn"

const TextWrapper = styled.div`
    margin: 100px 20px 20px;
`
const Blcok = styled.div`
    width: 20px;
    height: 20px;
`
const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    height: 35vh;
    max-height: 350px;
    min-height: 150px;
    place-items: center;
    overflow-y: auto;
`

const items = [
    { text: "경제/경영", image: "book1" },
    { text: "소설", image: "book2" },
    { text: "시/에세이", image: "book3" },
    { text: "인문", image: "book4" },
    { text: "경제", image: "book5" },
    { text: "청소년", image: "book6" },
    { text: "자기계발", image: "book7" },
    { text: "여행", image: "book8" }
]

export default function Select() {
    const [selectedItems, setSelectedItems] = useState<string[]>([])

    const handleSelectItem = (text: string) => {
        setSelectedItems(prev => (prev.includes(text) ? prev.filter(item => item !== text) : [...prev, text]))
    }

    const isAnySelected = selectedItems.length > 0

    return (
        <>
            <LoginWrapper>
                <TextWrapper>
                    <Text text={"다 왔어요!"} />
                    <Blcok />
                    <Text text={"마지막으로 사장님이"} />
                    <Text text={"좋아하는 피자 메뉴를"} />
                    <Text text={"골라볼까요?😍"} />
                </TextWrapper>
                <FadeIn delay="1s">
                    <GridWrapper>
                        {items.map(item => (
                            <Item
                                key={item.text}
                                text={item.text}
                                image={item.image}
                                isSelect={selectedItems.includes(item.text)}
                                onClick={() => handleSelectItem(item.text)}
                            />
                        ))}
                    </GridWrapper>
                </FadeIn>
            </LoginWrapper>
            <NextButton to="/signup" isActive={isAnySelected} />
        </>
    )
}
