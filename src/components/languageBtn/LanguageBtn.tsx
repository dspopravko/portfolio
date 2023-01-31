import React, { useContext } from 'react'
import { localeT, ThemeContext } from '../../utilities/Context'
import s from './LanguageBtn.module.css'
import cx from "classnames";

export const LanguageBtn = () => {
  const { locale, setLocale } = useContext(ThemeContext)

  const clickHandler = () =>
    locale === localeT.Ru ? setLocale(localeT.En) : setLocale(localeT.Ru)

  return (
    <div className={s.wrapper} onClick={clickHandler}>
      <span className={cx({[s.active]: locale === localeT.En})} >En</span>
      <span className={s.line}></span>
      <span className={cx({[s.activeRu]: locale === localeT.Ru})}>Ru</span>
    </div>
  )
}
