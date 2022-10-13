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
                        <FontAwesomeIcon size={"3x"} icon={faGithub} color={'#416CA6'}/>
                    </a>
                </div>
                <div className={s.link}>
                    <a target={'_blank'} href={'https://www.linkedin.com/in/demid-popravko-2aa212239'}>
                        <FontAwesomeIcon size={"3x"} icon={faLinkedin} color={'#416CA6'}/>
                    </a>
                </div>
                <div className={s.link}>
                    <a target={'_blank'} href={"https://www.facebook.com/profile.php?id=100002956073574"}>
                    <FontAwesomeIcon size={"3x"} icon={faFacebook} color={'#416CA6'}/>
                    </a>
                </div>
                <div className={s.link}>
                    <a target={'_blank'} href={'https://www.instagram.com/dspopravko/'}>
                        <FontAwesomeIcon size={"3x"} icon={faInstagram} color={'#416CA6'}/>
                    </a>
                </div>
            </div>
        </div>
    )
}