import React, {useContext} from 'react';
import s from './Contact.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot, faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faTelegram} from "@fortawesome/free-brands-svg-icons";
import {ThemeContext} from "../../utilities/Context";
import {contact} from "../../lang/contact";
import * as yup from 'yup'
import {SubmitHandler, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import {formAPI, FormDataType} from "../../api/form-api";

const schema = yup.object().shape({
	name: yup.string().min(3).max(20).required(),
	email: yup.string().email().required(),
	message: yup.string().min(20).required(),
})

export const Contact = () => {
	const {locale} = useContext(ThemeContext);
	const l = contact[locale]

	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm<FormDataType>({
		mode: 'onTouched',
		resolver: yupResolver(schema),
	})

	const onSubmit: SubmitHandler<FormDataType> = (data) => formAPI.sendForm(data)


	return (
		<section className={s.wrapper} id={"contact"}>
			<div className={s.title}><h2>{l.title}</h2></div>
			<div className={s.container}>
				<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
					<input {...register('name', { required: true })} type={"name"} placeholder={l.form.name}/>
					<input {...register('email', { required: true })} type={"email"} placeholder={l.form.email}/>
					<textarea {...register('message', { required: true })} placeholder={l.form.message}/>
					<button type="submit">{l.form.button}</button>
				</form>
				<div className={s.contacts}>
					<div className={s.unit}>
						<div>
							<FontAwesomeIcon size={"2x"} icon={faLocationDot} color={'#416CA6'}/></div>
						<div>
							{l.location}
						</div>
					</div>
					<div className={s.unit}>
						<div>
							<FontAwesomeIcon size={"2x"} icon={faPhone} color={'#416CA6'}/></div>
						<div>
							<a href="tel:+995595146507">+995 595 146 507</a>
						</div>
					</div>
					<div className={s.unit}>
						<div>
							<FontAwesomeIcon size={"2x"} icon={faEnvelope} color={'#416CA6'}/></div>
						<div>
							<a href="mailto:dspopravko@gmail.com">dspopravko@gmail.com</a>
						</div>
					</div>
					<div className={s.unit}>
						<div>
							<FontAwesomeIcon size={"2x"} icon={faTelegram} color={'#416CA6'}/></div>
						<div>
							<a target={'_blank'} href="https://telegram.me/dspopravko">Telegram</a>
						</div>
					</div>

				</div>
			</div>

		</section>
	)
}