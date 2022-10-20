import React, {useContext, useState} from 'react';
import s from './HeaderMobile.module.css'
import {Navbar} from "../../../pages/nav/Navbar";
import {DarkModeBtn} from "../../darkBtn/DarkModeBtn";
import {ThemeContext} from "../../../utilities/Context";
import {header} from "../../../lang/lang";

export const HeaderMobile = () => {
    const [open, setOpen] = useState(false)
    const {y, locale} = useContext(ThemeContext);
    const l = header[locale]

    return (
        <>
            <div className={ open ? s.mobileMenu : y > 50 ? s.mobileMenu + ' shadowUp' : s.mobileMenu }>
                <div className={s.title} onClick={()=> {window.scrollTo(0, 0)}}>
                    {l.name}
                </div>
                <div className={s.btnWrapper}>
                    <button onClick={() => setOpen(!open)}
                            className={s.menuBtn}>
                        {l.menu}
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