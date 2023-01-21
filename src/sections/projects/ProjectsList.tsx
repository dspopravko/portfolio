import React, { useContext, useState } from 'react'
import s from './ProjectsList.module.css'
import { ThemeContext } from '../../utilities/Context'
import { AnimatePresence } from 'framer-motion'
import { Project } from '../../components/Project/Project'
import { ProjectPopup } from '../../components/ProjectPopup/ProjectPopup'
import { setDocumentScroll } from '../../utilities/setDocumentScroll'
import { projects } from "../../data"
import { langProjects } from '../../data/lang'

export const ProjectsList = () => {
  const { locale } = useContext(ThemeContext)
  const l = langProjects[locale]
  const [selectedId, setSelectedId] = useState<string>('')
  const handleOpenPopup = (id: string) => {
    setDocumentScroll(false)
    setSelectedId(id)
  }
  const handleClosePopup = () => {
    setDocumentScroll(true)
    setSelectedId('')
  }
  const item = projects.find((item) => item.id === selectedId) || projects[0]
  return (
    <section className={s.wrapper} id={'projects'}>
      <div className={s.title}>
        <h2>{l.title}</h2>
      </div>
      <div className={s.container}>
        {projects.map((item, index) => (
          <Project
            index={index}
            key={item.id}
            handleOpen={handleOpenPopup}
            project={item}
          />
        ))}
        <AnimatePresence>
          {selectedId && (
            <ProjectPopup
              project={item}
              selectedId={selectedId}
              closePopup={handleClosePopup}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
