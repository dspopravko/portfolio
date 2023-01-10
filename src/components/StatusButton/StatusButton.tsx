import React from 'react';
import {AnimatePresence, motion} from "framer-motion";
import s from './StatusButton.module.css'
import {Loader} from "../loader/Loader";
import cx from "classnames";
import {CheckMark} from "../CheckMark";

export type statuses = 'idle' | 'pending' | 'success' | 'error'

type StatusButtonPropsType = {
	status: statuses
	title: string[]
	disabled: boolean
}

const innerDivVariants = {
	hidden: {
		opacity: 0,
		y: 6
	},
	visible: {
		opacity: 1,
		y: -8
	},
	exit: {
		opacity: 0,
	}
}

export const StatusButton = ({status, disabled, title}: StatusButtonPropsType) => {
	return (
		<button
			disabled={disabled || status === 'pending'}
			type="submit" className={cx({
			[s.button]: true,
			[s.success]: status === 'success',
			[s.error]: status === 'error'
		})
		}>
			<AnimatePresence>
				{status === 'idle' && (
					<motion.div
						key={'idle'}
						variants={innerDivVariants}
						initial='hidden'
						animate='visible'
						exit='exit'
					>{title[0]}</motion.div>
				)}
				{status === 'pending' && (
					<motion.div
						key={'pending'}
						variants={innerDivVariants}
						initial={{
							opacity: 0,
							y: -22
						}}
						animate={{
							opacity: 1,
						}}
						exit='exit'
					><Loader size={'small'}/></motion.div>
				)}
				{status === 'success' && (
					<motion.div
						key={'success'}
						variants={innerDivVariants}
						initial={{
							opacity: 0,
							y: -10
						}}
						animate={{
							opacity: 1,
							y: -25
						}}
						exit='exit'
						className={s.successContainer}
					>{title[2]}
						<CheckMark/>
					</motion.div>
				)}
				{status === 'error' && (
					<motion.div
						key={'error'}
						variants={innerDivVariants}
						initial='hidden'
						animate='visible'
						exit='exit'
					>{title[3]}</motion.div>
				)}
			</AnimatePresence>
		</button>
	);
}