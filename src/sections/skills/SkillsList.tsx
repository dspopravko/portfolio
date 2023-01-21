import React, { useContext } from 'react'
import s from './SkillsList.module.css'
import { ThemeContext } from '../../utilities/Context'
import { langSkills } from '../../data/lang'
import { SkillItem } from '../../components/Skill/SkillItem'
import { skills, stack } from "../../data";

export const SkillsList = () => {
  const { locale } = useContext(ThemeContext)
  const l = langSkills[locale]

  return (
    <section className={s.wrapper} id={'skills'}>
      <div className={s.title}>
        <h2>{l.title}</h2>
      </div>
      <div className={s.container}>
        {skills.map((s, i) => {
          let image: string | null = null
          for (const element of stack) {
            if (element.title === s.title) {
              image = element.img
              break
            }
          }
          if (!image) {
            return null
          }
          return <SkillItem skill={s} image={image} key={i} />
        })}
      </div>
    </section>
  )
}
