import React, { useContext } from 'react'
import cx from 'classnames'
import { localeT, ThemeContext } from '../../utilities/Context'

export const ThemeContainer = ({ children }: { children: React.ReactNode }) => {
  const { dark, locale } = useContext(ThemeContext)
  return (
    <div
      className={cx({
        'App dark': dark,
        App: !dark,
      })}
      style={{
        fontFamily: cx({
          Calibre: locale === localeT.En,
          'Fira Sans': locale === localeT.Ru,
        }),
      }}
    >
      {children}
    </div>
  )
}