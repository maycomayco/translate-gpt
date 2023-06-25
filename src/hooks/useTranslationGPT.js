import { useRef, useState } from 'react'
import { createTranslation } from '../services/open-ai'

// este hook recibe como parametro el texto a traducir
export const useTranslationGPT = ({ query }) => {
  const [translation, setTranslation] = useState({})
  const [loading, setLoading] = useState(false)
  const previousQuery = useRef(query) // con esto controlamos que no se vuelva a realizar la misma peticion

  const getTranslation = async () => {
    if (query === previousQuery.current) return

    try {
      setLoading(true)
      previousQuery.current = query
      const response = await createTranslation({ query })
      setTranslation(response)
    } catch (error) {
      console.log(error)
      throw new Error('Error getting translations')
    } finally {
      setLoading(false)
    }
  }

  return { translation, loading, getTranslation }
}
