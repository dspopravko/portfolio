import React, { useContext } from 'react'
import s from './Remote.module.css'
import { ThemeContext } from '../../utilities/Context'
import { langRemote } from '../../data/lang'

export const Remote = () => {
  const { locale } = useContext(ThemeContext)
  const l = langRemote[locale]

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    alert('💪💪💪')
  }
  return (
    <section className={s.wrapper} id={'remote'}>
      <div className={s.title}>
        <h2>{l.title}</h2>
      </div>
      <div className={s.container}>
        <button className={'button'} onClick={(e) => onClickHandler(e)}>{l.button}</button>
      </div>
    </section>
  )
}
