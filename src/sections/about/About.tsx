import React, { useContext } from 'react'
import s from './About.module.css'
import profilePictureRmBg from '../../assets/profile/profilePicture2RmBg.png'
import { ThemeContext } from '../../utilities/Context'
import { langAbout } from '../../data/lang'
import { Profile } from '../../components/Profile/Profile'
import { cvLink } from '../../data/cv/link'

export const About = () => {
  const { locale } = useContext(ThemeContext)
  const l = langAbout[locale]
  const buttonHandler = () => window.open(cvLink, '_blank')

  return (
    <section className={s.wrapper} id={'about'}>
      <div className={s.title}>
        <h2>{l.title}</h2>
      </div>
      <div className={s.container}>
        <div className={s.picture}>
          <div
            className={s.blob}
            style={{
              backgroundImage: `url(${profilePictureRmBg})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          ></div>
          <div className={s.btnContainer}>
            <button className={'button'} onClick={buttonHandler}>
              {l.button}
            </button>
          </div>
        </div>
        <Profile />
      </div>
    </section>
  )
}
