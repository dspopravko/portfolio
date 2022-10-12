import React from 'react';
import s from './About.module.css'

export const About = () => {
    return (
        <div className={s.wrapper} id={'about'}>
            <div className={s.title}><h2>About me</h2></div>
            <div className={s.container}>
                <div className={s.block1}>This is photo</div>
                <div className={s.block2}>This is description</div>
            </div>
        </div>
    )
}