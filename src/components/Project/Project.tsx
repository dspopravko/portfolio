import React from 'react'
import s from './Project.module.css'
import { ProjectType } from '../../data/projects'
import { motion } from 'framer-motion'

export type ProjectPropsType = {
  handleOpen: (id: string) => void
  project: ProjectType
  index: number
}

export const Project = ({ project, handleOpen }: ProjectPropsType) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter' || e.code === 'Space') {
      e.preventDefault()
      handleOpen(project.id)
    }
  }
  return (
    <motion.div
      tabIndex={0}
      whileHover={{
        scale: 1.005,
        transition: { duration: 0.15 },
        boxShadow: `0 0px 12px ${project.color}`,
      }}
      className={s.project}
      layoutId={'container' + project.id}
      key={project.id}
      onClick={() => handleOpen(project.id)}
      onKeyDown={handleKeyDown}
    >
      <motion.h3 layoutId={'title' + project.id}>{project.title}</motion.h3>
      <motion.div layoutId={'cover' + project.id} className={s.logoWrapper}>
        <motion.img layoutId={'image' + project.id} alt={'Social-Network-logo'} src={project.coverLogo} />
      </motion.div>
      <motion.p layoutId={'description' + project.id}>{project.descriptionShort}</motion.p>
      <p>LEARN MORE</p>
    </motion.div>
  )
}
