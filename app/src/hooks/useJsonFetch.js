import { useState, useEffect } from 'react'

export default function useJsonFetch (url, opts) {
  const [ data, setData ] = useState(null)
  const [ isLoading, setLoading ] = useState(false)
  const [ error, setError ] = useState(null)

  useEffect (() => {
    (async () => {
      try {
        setLoading(true)
        const result = await fetch(url, {method: opts})

        if (!result.ok) {
          throw new Error (result.statusText)
        }

        const data = await result.json()
        setData(data.status)
        setError(null)
      } catch (e) {
        setError(e)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return {data, isLoading, error}
}