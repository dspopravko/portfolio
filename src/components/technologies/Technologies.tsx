import React from 'react'
import { technologies } from '../../data/projects'
import cx from 'classnames'
import useWindowDimensions from '../../utilities/useWindowDimensions'
import s from './Technologies.module.css'
import redux from './../../assets/icons/redux.svg'
import storybook from './../../assets/icons/storybook.svg'
import reactLogo from './../../assets/icons/react.svg'
import table from './../../assets/icons/tables.svg'
import material from './../../assets/icons/material.svg'
import framer from './../../assets/icons/framer-motion.svg'
import formik from './../../assets/icons/formik.svg'
import reacthookform from './../../assets/icons/react-hook-form.svg'
import jest from './../../assets/icons/jest.svg'
import vite from './../../assets/icons/vite.svg'

const ignore = ['Redux Thunk', 'Snapshots']

export const Technologies = ({ tech }: { tech: Array<typeof technologies[number]> }) => {
  const { width } = useWindowDimensions()
  return (
    <div className={cx({ [s.container]: true, [s.twoColumns]: tech.length > 6 && width > 750 })}>
      {tech.map((t) => {
        if (ignore.some((v) => v === t)) {
          return null
        }
        return (
          <div className={s.item} key={t}>
            {t === 'React' && (
              <>
                <div className={s.logoContainer}>
                  <img alt={'React'} src={reactLogo} />
                </div>
                <p>React</p>
              </>
            )}
            {t === 'Redux' && (
              <>
                <div className={s.logoContainer}>
                  <img alt={'Redux'} src={redux} />
                </div>
                <p>Redux</p>
              </>
            )}
            {t === 'Storybook' && (
              <>
                <div className={s.logoContainer}>
                  <img alt={'Storybook'} src={storybook} />
                </div>
                <p>Storybook</p>
              </>
            )}
            {t === 'Unit-tests' && (
              <>
                <div className={s.logoContainer}>
                  <img alt={'Jest'} src={jest} />
                </div>
                <p>Unit tests</p>
              </>
            )}
            {t === 'Redux Toolkit' && (
              <>
                <div className={s.logoContainer}>
                  <img alt={'Redux'} src={redux} />
                </div>
                <p>Redux Toolkit</p>
              </>
            )}
            {t === 'Material UI' && (
              <>
                <div className={s.logoContainer}>
                  <img alt={'Material UI'} src={material} />
                </div>
                <p>Material UI</p>
              </>
            )}
            {t === 'React-tables' && (
              <>
                <div className={s.logoContainer}>
                  <img alt={'React tables'} src={table} />
                </div>
                <p>React tables</p>
              </>
            )}
            {t === 'Framer Motion' && (
              <>
                <div className={s.logoContainer}>
                  <img alt={'Framer Motion'} src={framer} />
                </div>
                <p>Framer Motion</p>
              </>
            )}
            {t === 'Formik' && (
              <>
                <div className={s.logoContainer}>
                  <img alt={'Formik'} src={formik} />
                </div>
                <p>Formik</p>
              </>
            )}
            {t === 'React-hook-form' && (
              <>
                <div className={s.logoContainer}>
                  <img alt={'React-hook-form'} src={reacthookform} />
                </div>
                <p>React-hook-form</p>
              </>
            )}
            {t === 'Vite' && (
              <>
                <div className={s.logoContainer}>
                  <img alt={'Vite'} src={vite} />
                </div>
                <p>Vite</p>
              </>
            )}
          </div>
        )
      })}
    </div>
  )
}
