import React, { useContext, useState } from 'react'
import s from './Contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { ThemeContext } from '../../utilities/Context'
import { contact } from '../../data/lang/contact'
import * as yup from 'yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { formAPI, FormDataType } from '../../api/form-api'
import { FieldError } from '../../components/fieldInput/FieldError'
import { StatusButton, statuses } from '../../components/StatusButton/StatusButton'

const schema = yup.object().shape({
  name: yup.string().min(3).max(20).required(),
  email: yup.string().email().required(),
  message: yup.string().min(10).required(),
})

export const Contact = () => {
  const [status, setStatus] = useState<statuses>('idle')
  const { locale } = useContext(ThemeContext)
  const l = contact[locale]

  const { register, handleSubmit, formState } = useForm<FormDataType>({
    mode: 'onTouched',
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<FormDataType> = async (data) => {
    if (status === 'success' || status === 'error') {
      setStatus('idle')
      return
    }
    setStatus('pending')
    try {
      await formAPI.sendForm(data)
      setStatus('success')
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section className={s.wrapper} id={'contacts'}>
      <div className={s.title}>
        <h2>{l.title}</h2>
      </div>
      <div className={s.container}>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.inputContainer}>
            <input {...register('name', { required: true })} type={'name'} placeholder={l.form.name} />
            <FieldError errorMessage={formState.errors.name?.message} isError={!!formState.errors.name?.message} />
          </div>
          <div className={s.inputContainer}>
            <input {...register('email', { required: true })} type={'email'} placeholder={l.form.email} />
            <FieldError errorMessage={formState.errors.email?.message} isError={!!formState.errors.email?.message} />
          </div>
          <div className={s.inputContainer}>
            <textarea {...register('message', { required: true })} placeholder={l.form.message} />
            <FieldError
              errorMessage={formState.errors.message?.message}
              isError={!!formState.errors.message?.message}
            />
          </div>
          <StatusButton status={status} title={l.form.button} disabled={!formState.isValid} />
        </form>
        <div className={s.contacts}>
          <div className={s.unit}>
            <div>
              <FontAwesomeIcon size={'2x'} icon={faLocationDot} color={'#416CA6'} />
            </div>
            <div style={{ whiteSpace: 'pre-line' }}>
              <p>{l.location}</p>
            </div>
          </div>
          <div className={s.unit}>
            <div>
              <FontAwesomeIcon size={'2x'} icon={faPhone} color={'#416CA6'} />
            </div>
            <div>
              <a href="tel:+995595146507">+995 595 146 507</a>
            </div>
          </div>
          <div className={s.unit}>
            <div>
              <FontAwesomeIcon size={'2x'} icon={faEnvelope} color={'#416CA6'} />
            </div>
            <div>
              <a href="mailto:dspopravko@gmail.com">dspopravko@gmail.com</a>
            </div>
          </div>
          <div className={s.unit}>
            <div>
              <FontAwesomeIcon size={'2x'} icon={faTelegram} color={'#416CA6'} />
            </div>
            <div>
              <a target={'_blank'} href="https://telegram.me/dpopravko" rel="noreferrer">
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
