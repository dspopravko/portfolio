import React from 'react';
import s from './Remote.module.css'

export const Remote = () => {
    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        alert("💪💪💪")
    }
    return (
        <div className={s.wrapper} id={'remote'}>
            <div className={s.title}><h2>I am available for remote work</h2></div>
            <div className={s.container}>
                <button onClick={(e) => onClickHandler(e)}>Hire me!</button>
            </div>
        </div>
    )
}