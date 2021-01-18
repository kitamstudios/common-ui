import { useEffect, useRef } from 'react'

// NOTE: From https://overreacted.io/making-setinterval-declarative-with-react-hooks/.
export const useInterval = (callback: any, delay: number) => {
  const savedCallback = useRef<HTMLDivElement>()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    const tick = () => {
      const current = savedCallback.current as any
      current()
    }

    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }

    return () => {}
  }, [delay])
}
