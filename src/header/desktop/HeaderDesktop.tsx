import React, {useContext} from 'react';
import s from './HeaderDesktop.module.css'
import {Navbar} from "../../nav/Navbar";
import {DarkModeBtn} from "../DarkModeBtn";
import {ThemeContext} from "../../Context";

export const HeaderDesktop = () => {
    const {y} = useContext(ThemeContext);
    return (
        <>
            <button
                onClick={() => {}}
                className={s.menuBtn}>
                Menu
            </button>
            <div className={y > 50 ? s.header + ' shadowBottom' : s.header}>
                <DarkModeBtn/>
                <Navbar/>
            </div>
        </>
    );
}