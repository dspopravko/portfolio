import React from 'react'
import s from './SkillItem.module.css'
import { SkillType } from '../../data'

export const SkillItem = ({ skill, image }: { skill: SkillType, image: string }) => {
  return (
    <div className={s.skill}>
      <div className={s.logoWrapper}>
        <img alt={`${skill.title}-logo`} src={image} />
      </div>
      <h3>{skill.title}</h3>
    </div>
  )
}