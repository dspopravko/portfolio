import { useState, useEffect } from 'react'

function getScrollDimensions() {
  const { scrollX: x, scrollY: y } = window
  return {
    x,
    y,
  }
}

export default function useScrollDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getScrollDimensions()
  )

  useEffect(() => {
    function handleScroll() {
      setWindowDimensions(getScrollDimensions())
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('resize', handleScroll)
  }, [])

  return windowDimensions
}
