import React, {useState} from 'react';
import './App.css';
import {Main} from "./main/Main";
import {ThemeContext} from "./Context";
import {Skills} from "./skills/Skills";
import {MyProjects} from "./myprojects/MyProjects";
import {Remote} from "./remote/Remote";
import {Contact} from "./contact/Contact";
import useWindowDimensions from "./useWindowDimensions";
import {About} from "./about/About";
import useScrollDimensions from "./useScrollDimensions";
import {Footer} from "./footer/Footer";
import {HeaderMobile} from "./header/mobile/HeaderMobile";
import {HeaderDesktop} from "./header/desktop/HeaderDesktop";

function App() {
    const [dark, setDark] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches)
    const {height, width} = useWindowDimensions();
    const {y} = useScrollDimensions()
    return (
        <ThemeContext.Provider value={{
            y,
            width,
            height,
            dark,
            setDark
        }}>
            <div className={dark ? "App dark" : "App"}>
                <header className="App-header">
                    {width < 750? <HeaderMobile/> : <HeaderDesktop/>}
                </header>
                <div className={"body_container"}>
                    <Main/>
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
