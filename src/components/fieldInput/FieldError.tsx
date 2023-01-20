import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cx from 'classnames'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import s from './FieldError.module.css'
import { AnimatePresence, motion } from 'framer-motion'

type FieldInputPropsType = {
  isError: boolean
  errorMessage: string | undefined
}

export const FieldError = ({ errorMessage, isError }: FieldInputPropsType) => {
  const [hint, setHint] = useState(false)
  return (
    <>
      <FontAwesomeIcon
        className={cx({
          [s.icon]: true,
          hidden: !isError,
          cursor: isError,
        })}
        icon={faCircleInfo}
        onMouseEnter={() => setHint(true)}
        onMouseLeave={() => setHint(false)}
      />
      <AnimatePresence>
        {hint && isError && (
          <motion.div
            initial={{
              opacity: 0.5,
              x: 10,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              x: 5,
              opacity: 0
            }}
            key={errorMessage}
            className={s.fieldError}
          >
            <p>{errorMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
