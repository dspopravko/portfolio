import React from 'react';
import s from './Skills.module.css'

export const Skills = () => {
    return (
        <div className={s.wrapper} id={'skills'}>
            <div className={s.title}><h2>This is my skills</h2></div>
            <div className={s.container}>
                <div className={s.skill}>
                    <div className={s.logoWrapper}>
                        <img alt={"Typescript-logo"} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"} />
                    </div>
                    <h3>Typescript</h3>
                    <p>TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.</p>
                </div>
                <div className={s.skill}>
                    <div className={s.logoWrapper}>
                        <img alt={"React-logo"} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"} />
                    </div>
                    <h3>React</h3>
                    <p>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.</p>
                </div>
                <div className={s.skill}>
                    <div className={s.logoWrapper}>
                        <img alt={"Storybook-logo"} src={"https://img.stackshare.io/service/4906/default_db6159e1ae3d61e909d2c05d5a2c6990bdc6088f.png"} />
                    </div>
                    <h3>Story book</h3>
                    <p>Documentation, testing and developing in one tool</p>
                </div>
            </div>
        </div>
    )
}