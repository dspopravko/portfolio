import React from 'react';
import s from './Navbar.module.css'

export const Navbar = () => {
    return (
        <div className={s.navbar}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#remote">Contacts</a>
            <a href="" onClick={(e)=> e.preventDefault()}>Download CV</a>
        </div>
    );
}