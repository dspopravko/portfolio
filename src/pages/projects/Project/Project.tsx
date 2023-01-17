import React from 'react'
import s from './Project.module.css'
import { ProjectType } from '../../../data/projects'
import { motion } from 'framer-motion'

export type ProjectPropsType = {
  handleOpen: (id: string) => void
  project: ProjectType
}

export const Project = ({ project, handleOpen }: ProjectPropsType) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.005,
        transition: { duration: 0.15 },
      }}
      className={s.project}
      layoutId={'container' + project.id}
      key={project.id}
      onClick={() => handleOpen(project.id)}
    >
      <motion.h3 layoutId={'title' + project.id}>{project.title}</motion.h3>
      <motion.div layoutId={'cover' + project.id} className={s.logoWrapper}>
        <img alt={'Social-Network-logo'} src={project.coverLogo} />
      </motion.div>
      <motion.p layoutId={'description' + project.id}>{project.descriptionShort}</motion.p>
    </motion.div>
  )
}
