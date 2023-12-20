import { useState } from 'react'

import { useTranslationGPT } from './hooks/useTranslationGPT'
import { Header } from './components/Header'
import { Form } from './components/Form'
import { Translations } from './components/Translations'
import { Footer } from './components/Footer'

import './App.css'

function App() {
  const [textareaValue, setTextareaValue] = useState('')
  const { translation, loading, getTranslation } = useTranslationGPT({
    query: textareaValue,
  })
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

      <section className="flex flex-col gap-4">
        <Form handleOnChange={handleOnChange} handleSubmit={handleSubmit} />
        <Translations loading={loading} translation={translation} />
      </section>

      <Footer />
    </>
  )
}

export default App
