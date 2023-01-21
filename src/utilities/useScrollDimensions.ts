import { useState, useEffect } from 'react'
import { throttle } from "./throttle";

function getScrollDimensions() {
  const { scrollX: x, scrollY: y } = window
  return {
    x,
    y,
  }
}

export default function useScrollDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getScrollDimensions())

  useEffect(() => {
    function handleScroll() {
      setWindowDimensions(getScrollDimensions())
    }

    window.addEventListener('scroll', throttle(handleScroll, 100))
    return () => window.removeEventListener('resize', throttle(handleScroll, 100))
  }, [])

  return windowDimensions
}
