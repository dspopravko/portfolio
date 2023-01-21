import React from 'react'
import cx from 'classnames'
import useWindowDimensions from '../../utilities/useWindowDimensions'
import s from './Stack.module.css'
import { stack, StackTitle } from "../../data";

const ignore = ['Redux Thunk', 'Snapshots']

export const StackList = ({ items }: { items: StackTitle[] }) => {
  const { width } = useWindowDimensions()

  return (
    <div className={cx({ [s.container]: true, [s.twoColumns]: items.length > 6 && width > 750 })}>
      {items.map((t) => {
        let image: string | null = null
        for (const element of stack) {
          if (ignore.some((v) => v === t)) {
            break
          }
          if (element.title === t) {
            image = element.img
            break
          }
        }
        if (!image) {
          return null
        }
        return (
          <div className={s.item} key={t}>
            <>
              <div className={s.logoContainer}>
                <img alt={t} src={image} />
              </div>
              <p>{t}</p>
            </>
          </div>
        )
      })}
    </div>
  )
}
