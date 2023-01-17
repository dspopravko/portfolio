import React from 'react'
import s from './Project.module.css'
import { ProjectType } from '../../../data/projects'
import { motion } from 'framer-motion'
import Tap from '../../../components/TapToOpen/Tap'

export type ProjectPropsType = {
  handleOpen: (id: string) => void
  project: ProjectType
  index: number
}

export const Project = ({ project, handleOpen, index }: ProjectPropsType) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.005,
        transition: { duration: 0.15 },
        boxShadow: `0 0px 12px ${project.color}`,
      }}
      className={s.project}
      layoutId={'container' + project.id}
      key={project.id}
      onClick={() => handleOpen(project.id)}
    >
      {index === 0 && (
        <div className={s.tapContainer}>
          <Tap width={'50px'} height={'50px'} />
        </div>
      )}
      <motion.h3 layoutId={'title' + project.id}>{project.title}</motion.h3>
      <motion.div layoutId={'cover' + project.id} className={s.logoWrapper}>
        <img alt={'Social-Network-logo'} src={project.coverLogo} />
      </motion.div>
      <motion.p layoutId={'description' + project.id}>{project.descriptionShort}</motion.p>
    </motion.div>
  )
}
