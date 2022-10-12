import React, {createContext} from "react";

type ThemeContextType = {
    y: number
    width: number
    height: number
    dark: boolean
    setDark: ((dark: boolean) => void)
}
const DefaultState = {
    y: 0,
    width: window.innerWidth,
    height: window.innerHeight,
    dark: false,
    setDark: (dark: boolean) => {}
}
export const ThemeContext = createContext<ThemeContextType>(DefaultState)
