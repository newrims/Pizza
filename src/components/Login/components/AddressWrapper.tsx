import styled from "styled-components"

import { useAddress } from "../../../context/AddressContext"

import addressData from "../../../data/AddressData"

import FadeIn from "./FadeIn"

const Address = styled.div`
    display: grid;
    grid-template-columns: 1fr auto 1fr auto 1fr;
    align-items: center;
    background-color: #fff;
    height: 35vh;
    min-height: 150px;
    max-height: 350px;
    padding: 20px 0;
`

const ItemWrapper = styled.ul<{ $isSelected: boolean }>`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: 100%;
    opacity: ${({ $isSelected }) => ($isSelected ? 1 : 0)};
    transition: opacity 0.2s linear;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`

const Line = styled.div`
    width: 1px;
    height: 100%;
    background-color: #707070;
`

const Wrapper = styled.li<{ $isSelected: boolean; $hasSelection: boolean }>`
    font-size: 23px;
    padding: 15px;
    text-align: center;
    box-sizing: border-box;
    color: ${({ $isSelected, $hasSelection }) => ($isSelected ? "#cb3d3f" : $hasSelection ? "#717171" : "#262626")};
    cursor: pointer;
`

interface AddressItemProps {
    text: string
    isSelected: boolean
    hasSelection: boolean
    onClick: () => void
}

function AddressItem({ text, isSelected, hasSelection, onClick }: AddressItemProps) {
    return (
        <Wrapper $isSelected={isSelected} $hasSelection={hasSelection} onClick={onClick}>
            {text}
        </Wrapper>
    )
}

export default function AddressWrapper() {
    const { si, gu, dong, setSi, setDong, setGu } = useAddress()

    return (
        <FadeIn delay="1s">
            <Address>
                <ItemWrapper $isSelected={true}>
                    {addressData.si.map((val: string, index: number) => (
                        <AddressItem
                            key={index}
                            text={val}
                            isSelected={val === si}
                            hasSelection={si !== ""}
                            onClick={() => {
                                setSi(val)
                                setGu("")
                                setDong("")
                            }}
                        />
                    ))}
                </ItemWrapper>
                <Line />
                <ItemWrapper $isSelected={si !== ""}>
                    {Object.keys(addressData[si] || {}).map((val, index) => (
                        <AddressItem
                            key={index}
                            text={val}
                            isSelected={val === gu}
                            hasSelection={gu !== ""}
                            onClick={() => {
                                setGu(val)
                                setDong("")
                            }}
                        />
                    ))}
                </ItemWrapper>
                <Line />
                <ItemWrapper $isSelected={gu !== ""}>
                    {si &&
                        gu &&
                        (addressData[si] as { [key: string]: string[] })[gu].map((val, index) => (
                            <AddressItem
                                key={index}
                                text={val}
                                isSelected={val === dong}
                                hasSelection={dong !== ""}
                                onClick={() => setDong(val)}
                            />
                        ))}
                </ItemWrapper>
            </Address>
        </FadeIn>
    )
}
