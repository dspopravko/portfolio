import React from 'react';
import s from "./Project.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faSitemap} from "@fortawesome/free-solid-svg-icons";

export type ProjectPropsType = {
    title: string
    githubLink: string
    deployLink: string
    coverLogo: string
    description: string
}

export const Project = ({
                            title,
                            description,
                            githubLink,
                            deployLink,
                            coverLogo
                        }: ProjectPropsType) => {
    return (
        <div className={s.project}>
            <h3>{title}</h3>
            <div className={s.logoWrapper}>
                <div className={s.onHover}>
                    <div className={s.gitHub}>
                        <a target={'_blank'} href={githubLink}>
                            <FontAwesomeIcon size={"3x"} icon={faGithub} color={'#FFF'}/>
                            <br/>
                            View on GitHub
                        </a>
                    </div>
                    <div className={s.deployment}>
                        <a target={'_blank'} href={deployLink}>
                            <FontAwesomeIcon size={"3x"} icon={faSitemap} color={'#FFF'}/>
                            <br/>
                            See deployment
                        </a>
                    </div>
                </div>
                <img alt={"Social-Network-logo"}
                     src={coverLogo}/>
            </div>
            <p>{description}</p>
        </div>
    );
}