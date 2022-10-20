import React, {useContext} from 'react';
import {localeT, ThemeContext} from "../../utilities/Context";
import s from './LanguageBtn.module.css'

export const LanguageBtn = () => {
    const {locale, setLocale} = useContext(ThemeContext)

    const clickHandler = () => locale === localeT.Ru
        ? setLocale(localeT.En) : setLocale(localeT.Ru)

    return (
        <div
            className={s.wrapper}
            onClick={clickHandler}
        >
            <span className={locale === localeT.En ? s.active : ''}>En</span>
            <span className={s.line}></span>
            <span className={locale === localeT.Ru ? s.active : ''}>Ru</span>
        </div>
    );
}