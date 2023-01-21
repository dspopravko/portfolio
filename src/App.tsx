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
import profilePictureRmBg from './assets/profile/profilePictureRmBg.png'
import { About } from './sections/about/About'
import cx from 'classnames'
import { AppLoader } from './components/appLoader/AppLoader'

function App() {
  const [dark, setDark] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches)
  const [locale, setLocale] = useState(localeT.En)
  const { height, width } = useWindowDimensions()
  const { y } = useScrollDimensions()
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
      >
        <AppLoader>
          {width < 750 ? <HeaderMobile /> : <HeaderDesktop />}
          <div className={'body_container'}>
            <Main picture={profilePictureRmBg} />
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
