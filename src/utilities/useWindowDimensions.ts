import { useState, useEffect } from 'react'
import { throttle } from "./throttle";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', throttle(handleResize, 100))
    return () => window.removeEventListener('resize', throttle(handleResize, 100))
  }, [])

  return windowDimensions
}
