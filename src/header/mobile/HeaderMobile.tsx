import React, {useContext, useState} from 'react';
import s from './HeaderMobile.module.css'
import {Navbar} from "../../nav/Navbar";
import {DarkModeBtn} from "../DarkModeBtn";
import {ThemeContext} from "../../Context";

export const HeaderMobile = () => {
    const [open, setOpen] = useState(false)
    const {y} = useContext(ThemeContext);
    return (
        <>
            <div className={open ? s.mobileMenu : y > 50 ? s.mobileMenu + ' shadowUp' : s.mobileMenu }>
                <div className={s.title} onClick={()=> {window.scrollTo(0, 0)}}>
                    Demid
                </div>
                <div className={s.btnWrapper}>
                    <button onClick={() => setOpen(!open)}
                            className={s.menuBtn}>
                        Menu
                    </button>
                    <DarkModeBtn/>
                </div>
            </div>
            <div className={open ? s.headerOpen : s.headerClose}>
                <Navbar/>
            </div>

        </>
    );
}