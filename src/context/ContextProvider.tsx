import { ThemeProvider } from "styled-components"
import UserNameProvider from "./UserNameContext"

import theme from "../styles/Color"
import AddressProvider from "./AddressContext"

export default function ContextProvider({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            <AddressProvider>
                <UserNameProvider>{children}</UserNameProvider>
            </AddressProvider>
        </ThemeProvider>
    )
}
