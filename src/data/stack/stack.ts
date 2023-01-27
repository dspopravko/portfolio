import redux from './../../assets/icons/redux.svg'
import storybook from './../../assets/icons/storybook.svg'
import table from './../../assets/icons/tables.svg'
import material from './../../assets/icons/material.svg'
import framer from './../../assets/icons/framer-motion.svg'
import formik from './../../assets/icons/formik.svg'
import reacthookform from './../../assets/icons/react-hook-form.svg'
import jest from './../../assets/icons/jest.svg'
import vite from './../../assets/icons/vite.svg'
import reactLogo from './../../assets/icons/react.svg'
import typescript from './../../assets/icons/typescript.svg'
import javascript from './../../assets/icons/javascript.svg'
import rest from './../../assets/icons/rest.svg'
import git from './../../assets/icons/git.svg'
import html from './../../assets/icons/html.svg'
import css from './../../assets/icons/css.svg'

export type StackTitle = typeof stack[number]['title']

export const stack = [
  { title: 'Typescript' as const, img: typescript },
  { title: 'JavaScript' as const, img: javascript },
  { title: 'Rest API' as const, img: rest },
  { title: 'Jest' as const, img: jest },
  { title: 'Git' as const, img: git },
  { title: 'React' as const, img: reactLogo },
  { title: 'Redux' as const, img: redux },
  { title: 'Redux Thunk' as const, img: redux },
  { title: 'Redux Toolkit' as const, img: redux },
  { title: 'Material UI' as const, img: material },
  { title: 'Storybook' as const, img: storybook },
  { title: 'Unit-tests' as const, img: jest },
  { title: 'Snapshots' as const, img: jest },
  { title: 'React-tables' as const, img: table },
  { title: 'Framer Motion' as const, img: framer },
  { title: 'Formik' as const, img: formik },
  { title: 'React-hook-form' as const, img: reacthookform },
  { title: 'Vite' as const, img: vite },
  { title: 'HTML' as const, img: html },
  { title: 'CSS' as const, img: css },
]
