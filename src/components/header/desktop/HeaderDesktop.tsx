import React, {useContext} from 'react';
import s from './HeaderDesktop.module.css'
import {DarkModeBtn} from "../../darkBtn/DarkModeBtn";
import {ThemeContext} from "../../../utilities/Context";
import {Navbar} from "../../../pages/nav/Navbar";
import {header} from "../../../lang/lang";
import {LanguageBtn} from "../../languageBtn/LanguageBtn";

export const HeaderDesktop = () => {
    const {y, locale} = useContext(ThemeContext);
    const l = header[locale]

    return (
        <>
            <button
                onClick={() => {}}
                className={s.menuBtn}>
                {l.menu}
            </button>
            <div className={y > 50 ? `${s.header} ${s.small} shadowBottom` : s.header}>
                <LanguageBtn/>
                <DarkModeBtn/>
                <Navbar/>
            </div>
        </>
    );
}