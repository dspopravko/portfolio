import React, {useState} from 'react';
import './App.css';
import {Main} from "./pages/main/Main";
import {localeT, ThemeContext} from "./utilities/Context";
import {Skills} from "./pages/skills/Skills";
import {MyProjects} from "./pages/myprojects/MyProjects";
import {Remote} from "./pages/remote/Remote";
import {Contact} from "./pages/contact/Contact";
import useWindowDimensions from "./utilities/useWindowDimensions";
import useScrollDimensions from "./utilities/useScrollDimensions";
import {Footer} from "./components/footer/Footer";
import {HeaderMobile} from "./components/header/mobile/HeaderMobile";
import {HeaderDesktop} from "./components/header/desktop/HeaderDesktop";
import profilePictureRmBg from "./assets/profile/profilePictureRmBg.png"
import {About} from "./pages/about/About";
import {projectsArray} from "./data/projects";

function App() {
    const [dark, setDark] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches)
    const [locale, setLocale] = useState(localeT.En)
    const {height, width} = useWindowDimensions();
    const {y} = useScrollDimensions()
    return (
        <ThemeContext.Provider value={{
            y,
            width,
            height,
            dark,
            locale,
            setLocale,
            projectsArray,
            setDark
        }}>
            <div className={dark ? "App dark" : "App"}>
                <header className="App-header">
                    {width < 750? <HeaderMobile/> : <HeaderDesktop/>}
                </header>
                <div className={"body_container"}>
                    <Main picture={profilePictureRmBg}/>
                    <About/>
                    <Skills/>
                    <MyProjects/>
                    <Remote/>
                    <Contact/>
                </div>
                <Footer/>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
