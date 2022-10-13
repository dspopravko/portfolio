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
            <a target={"_blank"} style={{color: 'red'}} href="https://youtu.be/dQw4w9WgXcQ">CV</a>
        </div>
    );
}