import React from 'react';
import s from './Footer.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons"

export const Footer = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.link}>
                    <a target={'_blank'} href={'https://github.com/dspopravko'}>
                        <FontAwesomeIcon size={"4x"} icon={faGithub} color={'#20ae44'}/>
                    </a>
                </div>
                <div className={s.link}>
                    <a target={'_blank'} href={'https://www.linkedin.com/in/demid-popravko-2aa212239'}>
                        <FontAwesomeIcon size={"4x"} icon={faLinkedin} color={'#20ae44'}/>
                    </a>
                </div>
                <div className={s.link}>
                    <a target={'_blank'} href={"https://www.facebook.com/profile.php?id=100002956073574"}>
                    <FontAwesomeIcon size={"4x"} icon={faFacebook} color={'#20ae44'}/>
                    </a>
                </div>
                <div className={s.link}>
                    <a target={'_blank'} href={'https://www.instagram.com/dspopravko/'}>
                        <FontAwesomeIcon size={"4x"} icon={faInstagram} color={'#20ae44'}/>
                    </a>
                </div>
            </div>
        </div>
    )
}