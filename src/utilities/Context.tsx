import { createContext } from 'react'

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
  setDark: (dark: boolean) => void
  setLocale: (locale: localeT) => void
}
const DefaultState = {
  y: 0,
  width: window.innerWidth,
  height: window.innerHeight,
  dark: false,
  locale: localeT.En,
  setDark: (dark: boolean) => undefined,
  setLocale: (locale: localeT) => undefined,
}
export const ThemeContext = createContext<ThemeContextType>(DefaultState)
