import { useEffect, useState } from "react";

export const usePageLoadedState = () => {
  const [isLoaded, setLoaded] = useState(false)
  useEffect(() => {
    const onPageLoad = () => setLoaded(true)
    if (document.readyState === 'complete') {
      onPageLoad()
    } else {
      window.addEventListener('load', onPageLoad)
      return () => window.removeEventListener('load', onPageLoad)
    }
  }, [])
  return [isLoaded]
}