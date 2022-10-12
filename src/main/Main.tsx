import React from 'react';
import s from './Main.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

export const Main = () => {
    return (
        <div className={s.wrapper} id={'home'}>
            <div className={s.block1}>
                <div className={s.links}>
                    <a target={'_blank'} href={'https://github.com/dspopravko'}>
                    <FontAwesomeIcon size="2x" icon={faGithub} color={'#20ae44'} />
                    </a>
                    <a target={'_blank'} href={'https://www.linkedin.com/in/demid-popravko-2aa212239'}>
                    <FontAwesomeIcon size="2x" icon={faLinkedin} color={'#20ae44'}/>
                    </a>
                </div>
                <div className={s.hello}>
                    <h1>Hi, a'm Demid</h1>
                    <h2>Frontend developer</h2>
                    <button>Contact me</button>
                </div>
            </div>
            <div className={s.block2}>This is photo</div>
        </div>
    )
}