import React, { useContext } from 'react'
import s from './About.module.css'
import profilePictureRmBg from '../../assets/profile/profilePicture2RmBg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDigging } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../../utilities/Context'
import { langAbout } from '../../lang'

export const About = () => {
  const { locale } = useContext(ThemeContext)
  const l = langAbout[locale]

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
        </div>
        <div className={s.about}>
          {l.description_1}
          <br />
          {l.description_2}
          <div className={s.btnContainer}>
            <button className={'button'}>{l.button}</button>
          </div>
        </div>
        <div className={s.experience}>
          <FontAwesomeIcon size={'8x'} icon={faDigging} color={'var(--primary-color)'} />
          <br />
          <h3 style={{ textAlign: 'center' }}>
            This block is under
            <br />
            construction right now
          </h3>
        </div>
      </div>
    </section>
  )
}
