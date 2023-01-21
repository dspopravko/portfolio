import React, { useContext } from 'react'
import s from './Loader.module.css'
import cx from 'classnames'
import { ThemeContext } from '../../utilities/Context'

export const Loader = ({ size }: { size: 'small' | 'regular' | 'large' }) => {
  const { dark } = useContext(ThemeContext)
  return (
    <span
      className={cx({
        [s.loader]: dark,
        [s.loaderLight]: !dark,
      })}
      style={{
        transform: cx({
          'scale(0.6)': size === 'small',
          'scale(1)': size === 'regular',
          'scale(2)': size === 'large',
        }),
        ['--radius' as string] : cx({
          '6px': size === 'small',
          '2px': size === 'regular',
          '1px': size === 'large',
        })
      }}
    ></span>
  )
}
