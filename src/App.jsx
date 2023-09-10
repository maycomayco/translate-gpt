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
    <div className=" bg-gray-900 text-white">
      <div className="container mx-auto grid min-h-screen grid-rows-[60px_1fr_60px] gap-4">
        <Header />
        <main className="flex flex-col gap-4">
          <Form handleOnChange={handleOnChange} handleSubmit={handleSubmit} />
          <Translations loading={loading} translation={translation} />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
