import React, {createContext} from "react";

export type ProjectType = {
    title: string
    githubLink: string
    deployLink: string
    coverLogo: string
    description: string
}
export enum localeT {
    En = 'en',
    Ru = 'ru',
}
type ThemeContextType = {
    y: number
    width: number
    height: number
    dark: boolean
    locale: localeT
    projectsArray: ProjectType[]
    setDark: ((dark: boolean) => void)
    setLocale: ((locale: localeT) => void)
}
const DefaultState = {
    y: 0,
    width: window.innerWidth,
    height: window.innerHeight,
    dark: false,
    locale: localeT.En,
    projectsArray: [],
    setDark: (dark: boolean) => {},
    setLocale: (locale: localeT) => {}
}
export const ThemeContext = createContext<ThemeContextType>(DefaultState)
