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

const projects = [
    {
        title: "Social network",
        githubLink: "https://github.com/dspopravko/04-samurai-way",
        deployLink: 'https://github.com/dspopravko',
        coverLogo: "https://pageflows.com/media/videos/thumbnail_c069db06-5002-4b84-a790-63a4c0b1e9e5.jpg",
        description: "Social Network is an online platform that allows people to create an account and interact with other people on the website. Users can build there virtual world on the site, make friends and share their thoughts and ideas by writing a post."
    },    {
        title: "Todolist",
        githubLink: "https://github.com/dspopravko/04-samurai-way",
        deployLink: 'https://github.com/dspopravko',
        coverLogo: "https://vuejsexamples.com/content/images/2019/07/priority.png",
        description: "Todo List is an online platform for organizing your personal or work tasks which can help you to increase the productivity, prioritise tasks, manage tasks effectively and improve time management."
    },    {
        title: "Counter",
        githubLink: "https://github.com/dspopravko/04-samurai-way",
        deployLink: 'https://github.com/dspopravko',
        coverLogo: "https://img.stackshare.io/service/4906/default_db6159e1ae3d61e909d2c05d5a2c6990bdc6088f.png",
        description: "Counter is a test project which (to tell the truth) doesn't have a lot of practical use. It allows to do some settings which influence on the way how the counter works."
    },
]

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
            projects,
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
