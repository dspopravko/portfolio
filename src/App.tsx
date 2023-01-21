import React, { useState } from 'react'
import './App.css'
import { Main } from './sections/main/Main'
import { localeT, ThemeContext } from './utilities/Context'
import { SkillsList } from './sections/skills/SkillsList'
import { ProjectsList } from './sections/projects/ProjectsList'
import { Remote } from './sections/remote/Remote'
import { Contact } from './sections/contact/Contact'
import useWindowDimensions from './utilities/useWindowDimensions'
import useScrollDimensions from './utilities/useScrollDimensions'
import { Footer } from './components/footer/Footer'
import { HeaderMobile } from './components/header/mobile/HeaderMobile'
import { HeaderDesktop } from './components/header/desktop/HeaderDesktop'
import { AnimatePresence } from 'framer-motion'
import { About } from './sections/about/About'
import cx from 'classnames'
import { AppLoader } from './components/appLoader/AppLoader'
import { usePageLoadedState } from './utilities/usePageLoadedState'

function App() {
  const [dark, setDark] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches)
  const [locale, setLocale] = useState(localeT.En)
  const { height, width } = useWindowDimensions()
  const { y } = useScrollDimensions()
  const [isLoaded] = usePageLoadedState()
  return (
    <ThemeContext.Provider
      value={{
        y,
        width,
        height,
        dark,
        locale,
        setLocale,
        setDark,
      }}
    >
      <div
        className={cx({
          'App dark': dark,
          App: !dark,
        })}
        style={{
          fontFamily: cx({
            Calibre: locale === localeT.En,
            'Fira Sans': locale === localeT.Ru,
          }),
        }}
      >
        <AppLoader isLoaded={isLoaded}>
          <AnimatePresence>{width < 750 ? <HeaderMobile /> : <HeaderDesktop />}</AnimatePresence>
          <div className={'body_container'}>
            <Main isLoaded={isLoaded}/>
            <About />
            <SkillsList />
            <ProjectsList />
            <Remote />
            <Contact />
          </div>
          <Footer />
        </AppLoader>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
