import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import s from './Profile.module.css'
import { Experience } from '../WorkExperience/Experience'
import { work, education, introduction} from "../../data"

interface Ingredient {
  icon: string
  label: string
}

export const tabs: Ingredient[] = [
  { icon: '👨', label: 'General' },
  { icon: '👨‍💻', label: 'Work' },
  { icon: '🎓', label: 'Education' },
]

export const Profile = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0])

  return (
    <div className={s.mainContainer}>
      <nav className={s.tabGroupContainer}>
        <ul className={s.tabGroup}>
          {tabs.map((item) => (
            <li
              key={item.label}
              className={item === selectedTab ? s.selected : s.tab}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.icon} ${item.label}`}
              {item === selectedTab ? <motion.div className={s.indicator} layoutId="underline" /> : null}
            </li>
          ))}
        </ul>
      </nav>
      <main className={s.content}>
        <AnimatePresence mode={'wait'}>
          <motion.div
            key={selectedTab ? selectedTab.label : 'empty'}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab.label === 'General' && <p>{introduction}</p>}
            {selectedTab.label === 'Work' && <Experience items={work} />}
            {selectedTab.label === 'Education' && <Experience items={education} />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}
