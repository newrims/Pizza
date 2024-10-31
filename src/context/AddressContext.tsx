import { useState, createContext, useContext } from "react"

const AddressValueContext = createContext<{ si: string; gu: string; dong: string }>({ si: "", gu: "", dong: "" })
const AddressActionContext = createContext<{
    setSi: React.Dispatch<React.SetStateAction<string>>
    setGu: React.Dispatch<React.SetStateAction<string>>
    setDong: React.Dispatch<React.SetStateAction<string>>
}>({ setSi: () => {}, setGu: () => {}, setDong: () => {} })

export default function AddressProvider({ children }: { children: React.ReactNode }) {
    const [si, setSi] = useState<string>("")
    const [gu, setGu] = useState<string>("")
    const [dong, setDong] = useState<string>("")

    return (
        <AddressValueContext.Provider value={{ si, gu, dong }}>
            <AddressActionContext.Provider value={{ setSi, setGu, setDong }}>{children}</AddressActionContext.Provider>
        </AddressValueContext.Provider>
    )
}
export function useAddress() {
    const { si, gu, dong } = useContext(AddressValueContext)
    const { setSi, setGu, setDong } = useContext(AddressActionContext)
    return { si, gu, dong, setSi, setGu, setDong }
}
