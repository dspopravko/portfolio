import React, {useContext} from 'react';
import s from './MyProjects.module.css'
import {Project} from "./Project";
import {ThemeContext} from "../../utilities/Context";
import {projects} from "../../lang/lang";

export const MyProjects = () => {
    const {projectsArray, locale} = useContext(ThemeContext);
    const l = projects[locale]

    return (
        <section className={s.wrapper} id={"projects"}>
            <div className={s.title}><h2>{l.title}</h2></div>
            <div className={s.container}>
                {projectsArray.map((p, index) => <Project
                    key={index}
                    title={p.title}
                    githubLink={p.githubLink}
                    deployLink={p.deployLink}
                    coverLogo={p.coverLogo}
                    description={p.description}/>)
                }
            </div>
        </section>
    )
}