import React, { useContext } from 'react'
import s from './themeButton.module.css'
import { ThemeContext } from '../../utilities/Context'
import cx from 'classnames'

export const ThemeButton = () => {
  const { dark, setDark } = useContext(ThemeContext)
  return (
    <div className={cx({ [s.container]: true, transition: true })}>
      <button
        style={{ boxShadow: 'none' }}
        aria-label="Toggle Dark Mode"
        type="button"
        className={s.btn}
        onClick={() => setDark(!dark)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          className={cx({ [s.btn]: true, transition: true })}
        >
          {dark ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className={s.light}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className={s.dark}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          )}
        </svg>
      </button>
    </div>
  )
}
