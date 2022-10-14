import React, {useContext} from 'react';
import s from './MyProjects.module.css'
import {Project} from "./Project";
import {ThemeContext} from "../Context";

export const MyProjects = () => {
    const {projects} = useContext(ThemeContext);
    return (
        <div className={s.wrapper} id={"projects"}>
            <div className={s.title}><h2>My Projects</h2></div>
            <div className={s.container}>
                {projects.map((p, index) => <Project
                    key={index}
                    title={p.title}
                    githubLink={p.githubLink}
                    deployLink={p.deployLink}
                    coverLogo={p.coverLogo}
                    description={p.description}/>)
                }
            </div>
        </div>
    )
}