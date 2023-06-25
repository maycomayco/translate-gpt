import { useState } from 'react'
import { useTranslationGPT } from './hooks/useTranslationGPT'
import { Header } from './components/Header'
import { Form } from './components/Form'
import { Translations } from './components/Translations'
import './App.css'
import { Footer } from './components/Footer'

function App () {
  const [textareaValue, setTextareaValue] = useState('')
  const { translation, loading, getTranslation } = useTranslationGPT({ query: textareaValue })

  const handleSubmit = async (event) => {
    event.preventDefault()
    await getTranslation()
  }

  const handleOnChange = (event) => {
    setTextareaValue(event.target.value)
  }

  return (
    <>
      <Header />

      <main className='container'>
        <Form handleSubmit={handleSubmit} handleOnChange={handleOnChange} />
        <Translations translation={translation} loading={loading} />
      </main>

      <Footer />
    </>
  )
}

export default App
