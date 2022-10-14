import React from 'react';
import s from './About.module.css'
import profilePictureRmBg from "./../assets/profile/profilePicture2RmBg.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDigging} from "@fortawesome/free-solid-svg-icons";

export const About = () => {
    return (
        <div className={s.wrapper} id={'about'}>
            <div className={s.title}><h2>About me</h2></div>
            <div className={s.container}>
                <div className={s.picture}>
                    <div
                        className={s.blob}
                        style={{
                            backgroundImage: `url(${profilePictureRmBg})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover"
                        }}>
                    </div>
                </div>
                <div className={s.about}>
                    I am currently in Tbilisi, Georgia.<br/>
                    I have always had a passion for computers.<br/>While studying at the university, I worked as a technician in the IT department.<br/>
                    <div className={s.btnContainer}>
                    <button>Download CV</button>
                    </div>
                </div>
            <div className={s.experience}>
                <FontAwesomeIcon size={'8x'} icon={faDigging} color={"var(--primary-color)"}/>
                <br/>
                <h3 style={{textAlign: "center"}}>This block is under<br/>construction right now</h3>
            </div>
            </div>
        </div>
)
}