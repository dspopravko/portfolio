import React, {createContext} from "react";

export type ProjectType = {
    title: string
    githubLink: string
    deployLink: string
    coverLogo: string
    description: string
}

type ThemeContextType = {
    y: number
    width: number
    height: number
    dark: boolean
    projects: ProjectType[]
    setDark: ((dark: boolean) => void)
}
const DefaultState = {
    y: 0,
    width: window.innerWidth,
    height: window.innerHeight,
    dark: false,
    projects: [],
    setDark: (dark: boolean) => {}
}
export const ThemeContext = createContext<ThemeContextType>(DefaultState)
