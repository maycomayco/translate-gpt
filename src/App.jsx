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

  const setQuery = (event) => {
    setTextareaValue(event.target.value)
  }

  return (
    <>
      <Header />

      <div className="flex flex-col gap-8">
        <Form
          getTranslation={getTranslation}
          isLoading={loading}
          setQuery={setQuery}
        />
        <Translations loading={loading} translation={translation} />
      </div>

      <Footer />
    </>
  )
}

export default App
