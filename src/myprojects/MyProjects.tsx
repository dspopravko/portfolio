import React from 'react';
import s from './MyProjects.module.css'

export const MyProjects = () => {
    return (
        <div className={s.wrapper} id={"projects"}>
            <div className={s.title}><h2>My Projects</h2></div>
            <div className={s.container}>
                <div className={s.project}>
                    <h3>Social network</h3>
                    <div className={s.logoWrapper}>
                        <img alt={"Typescript-logo"} src={"https://pageflows.com/media/videos/thumbnail_c069db06-5002-4b84-a790-63a4c0b1e9e5.jpg"} />
                    </div>
                    <p>Social Network is an online platform that allows people to create an account and interact with other people on the website. Users can build there virtual world on the site, make friends and share their thoughts and ideas by writing a post.</p>
                </div>
                <div className={s.project}>
                    <h3>Todolist</h3>
                    <div className={s.logoWrapper}>
                        <img alt={"React-logo"} src={"https://vuejsexamples.com/content/images/2019/07/priority.png"} />
                    </div>
                    <p>Todo List is an online platform for organizing your personal or work tasks which can help you to increase the productivity, prioritise tasks, manage tasks effectively and improve time management.</p>
                </div>
                <div className={s.project}>
                    <h3>Counter</h3>
                    <div className={s.logoWrapper}>
                        <img alt={"Storybook-logo"} src={"https://img.stackshare.io/service/4906/default_db6159e1ae3d61e909d2c05d5a2c6990bdc6088f.png"} />
                    </div>
                    <p>Counter is a test project which (to tell the truth) doesn't have a lot of practical use. It allows to do some settings which influence on the way how the counter works.</p>
                </div>
            </div>
        </div>
    )
}