import React, {useState} from 'react';
import './App.css';
import {Main} from "./main/Main";
import {ThemeContext} from "./Context";
import {Skills} from "./skills/Skills";
import {MyProjects} from "./myprojects/MyProjects";
import {Remote} from "./remote/Remote";
import {Contact} from "./contact/Contact";
import {Header} from "./header/Header";
import useWindowDimensions from "./useWindowDimensions";
import {About} from "./about/About";
import useScrollDimensions from "./useScrollDimensions";
import {Footer} from "./footer/Footer";

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
                    <Header/>
                </header>
                <div className={dark ? "module dark" : "module"}>
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
