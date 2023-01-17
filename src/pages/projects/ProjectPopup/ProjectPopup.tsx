import React, { useRef } from 'react'
import s from './ProjectPopup.module.css'
import { motion } from 'framer-motion'
import { ProjectType } from '../../../data/projects'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Technologies } from '../../../components/technologies/Technologies'

type ProjectPopupPropsType = {
  project: ProjectType
  selectedId: string
  closePopup: () => void
  children?: React.ReactNode
}

export const ProjectPopup = ({ closePopup, selectedId, project, children }: ProjectPopupPropsType) => {
  const popupRef = useRef<HTMLDivElement>(null)
  const overlayHandler = ({ target }: React.MouseEvent<HTMLDivElement>) => {
    if (popupRef.current && !popupRef.current.contains(target as Node)) {
      closePopup()
    }
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={overlayHandler}
        className={s.overlay}
      >
        <motion.div ref={popupRef} className={s.popupContent} layoutId={'container' + selectedId}>
          <button className={s.close} onClick={closePopup}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <motion.h2 className={s.titleH2} layoutId={'title' + project.id}>
            {project.title}
          </motion.h2>
          <motion.p layoutId={'description' + project.id}>{project.descriptionLong}</motion.p>
          <div className={s.infoBlock}>
            <div className={s.container}>
              <div>
                <h5>Type</h5>
                <p>{project.projectType}</p>
              </div>
              <div>
                <h5>Stack</h5>
                {project.technologies.map((t) => (
                  <p key={t}>{t}</p>
                ))}
              </div>
              <div>
                <h5>Links</h5>
                <a href={project.githubLink}>
                  Github
                </a>
                <a href={project.deployLink}>
                  Deployment
                </a>
              </div>
            </div>
          </div>

          <motion.div layoutId={'cover' + project.id} className={s.imageContainer}>
            <img className={s.image} alt={'Social-Network-logo'} src={project.coverLogo} />
          </motion.div>

          <motion.h3 className={s.titleH3}>Purpose & goals</motion.h3>
          <div className={s.storyBlock}>
            <div className={s.text}>
              <p>{project.goals}</p>
            </div>
          </div>

          <motion.h3 style={{ alignSelf: 'flex-end' }} className={s.titleH3}>
            Web stack
          </motion.h3>
          <div className={s.storyBlock}>
            <div className={s.imageContainer}>
              <Technologies tech={project.technologies} />
            </div>
            <div className={s.text}>
              <p>{project.stack}</p>
            </div>
          </div>

          <motion.h3 className={s.titleH3}>Problems & process</motion.h3>
          <div className={s.storyBlock}>
            <div className={s.text}>
              <p>{project.problems}</p>
            </div>
          </div>

          <motion.h3 style={{ alignSelf: 'flex-end' }} className={s.titleH3}>
            Lesson learned
          </motion.h3>
          <div className={s.storyBlock}>
            <div className={s.text}>
              <p>{project.final}</p>
            </div>
          </div>
          {children}
        </motion.div>

      </motion.div>
    </>
  )
}
