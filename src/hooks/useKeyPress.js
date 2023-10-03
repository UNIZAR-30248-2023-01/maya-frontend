'use client'
import { useEffect, useState, useCallback } from 'react'

export function useKeyPress (targetKey, callback = () => {}) {
  const [keyPressed, setKeyPressed] = useState(false)

  const downHandler = useCallback(
    (event) => {
      if (event.key.toLowerCase() === targetKey.toLowerCase() && event.altKey) {
        setKeyPressed(true)
        callback()
      }
    },
    [callback, targetKey]
  )

  const upHandler = useCallback(
    (event) => {
      if (event.key.toLowerCase() === targetKey.toLowerCase() && event.altKey) setKeyPressed(false)
    },
    [targetKey]
  )

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)

    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  }, [downHandler, upHandler])

  return keyPressed
}
