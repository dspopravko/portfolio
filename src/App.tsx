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
import { Footer } from './layout/Footer/Footer'
import { About } from './sections/about/About'
import { AppLoader } from './layout/AppLoader/AppLoader'
import { usePageLoadedState } from './utilities/usePageLoadedState'
import { ContentContainer } from './layout/ContentContainer/ContentContainer'
import { ThemeContainer } from './layout/ThemeContainer/ThemeContainer'
import { Header } from './layout/Header'

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
      <ThemeContainer>
        <AppLoader isLoaded={isLoaded}>
          <Header />
          <ContentContainer>
            <Main isLoaded />
            <About />
            <SkillsList />
            <ProjectsList />
            <Remote />
            <Contact />
          </ContentContainer>
          <Footer />
        </AppLoader>
      </ThemeContainer>
    </ThemeContext.Provider>
  )
}

export default App
