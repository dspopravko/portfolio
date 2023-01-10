import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import cx from "classnames";
import {faCircleInfo} from "@fortawesome/free-solid-svg-icons";
import s from './FieldError.module.css'

type FieldInputPropsType = {
	isError: boolean
	errorMessage: string | undefined
}

export const FieldError = ({errorMessage, isError}: FieldInputPropsType) => {
	const [hint, setHint] = useState(false)
	return (
		<>
			<FontAwesomeIcon
				className={cx({
					[s.icon]: true,
					'hidden': !isError,
					'cursor': isError
				})}
				icon={faCircleInfo}
				onMouseEnter={() => setHint(true)}
				onMouseLeave={() => setHint(false)}
			/>
			{hint && isError && <div className={s.fieldError}><p>{errorMessage}</p></div>}
		</>
	);
}