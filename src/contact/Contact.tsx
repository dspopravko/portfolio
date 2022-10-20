import React from 'react';
import s from './Contact.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot, faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faTelegram} from "@fortawesome/free-brands-svg-icons";

export const Contact = () => {

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        alert("💪💪💪")
    }
    return (
        <section className={s.wrapper} id={"contact"}>
            <div className={s.title}><h2>Contact me</h2></div>
            <div className={s.container}>
                <form className={s.form}>
                    <input type={"name"} placeholder={'Name'}/>
                    <input type={"email"} placeholder={'Email'}/>
                    <textarea placeholder={'Type your message'}/>
                    <button onClick={(e) => onClickHandler(e)}>Send</button>
                </form>
                <div className={s.contacts}>
                    <div className={s.unit}>
                        <div>
                            <FontAwesomeIcon size={"2x"} icon={faLocationDot} color={'#416CA6'}/></div>
                        <div>
                            Georgia, Tbilisi. <br/> Ready for relocation.
                        </div>
                    </div>
                    <div className={s.unit}>
                        <div>
                            <FontAwesomeIcon size={"2x"} icon={faPhone} color={'#416CA6'}/></div>
                        <div>
                            <a href="tel:+995595146507">+995 595 146 507</a>
                        </div>
                    </div>
                    <div className={s.unit}>
                        <div>
                            <FontAwesomeIcon size={"2x"} icon={faEnvelope} color={'#416CA6'}/></div>
                        <div>
                            <a href="mailto:dspopravko@gmail.com">dspopravko@gmail.com</a>
                        </div>
                    </div>
                    <div className={s.unit}>
                        <div>
                            <FontAwesomeIcon size={"2x"} icon={faTelegram} color={'#416CA6'}/></div>
                        <div>
                            <a target={'_blank'} href="https://telegram.me/dspopravko">Telegram</a>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}