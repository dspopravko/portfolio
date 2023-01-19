import React from 'react'
import s from './Experience.module.css'

type ExperiencePropsType = {
  items: {
    title: string
    description: string
    dates: string
  }[]
}
export const Experience = ({ items }: ExperiencePropsType) => {
  return (
    <div className={s.mainContainer}>
      <div className={s.timelineContainer}>
        <span className={s.timeline}></span>
      </div>
      <div className={s.experienceContainer}>
        {items &&
          items.map((i) => {
            return (
              <div key={i.title} className={s.item}>
                <p className={s.title}>
                  {i.title}&nbsp;<span>{i.dates}</span>
                </p>
                <p>{i.description}</p>
              </div>
            )
          })}
      </div>
    </div>
  )
}
