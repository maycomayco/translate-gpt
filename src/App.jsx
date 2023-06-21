import { useState } from 'react'
import { useTranslationGPT } from './hooks/useTranslationGPT'
import './App.css'

function App () {
  const [textareaValue, setTextareaValue] = useState('')
  const { translation, loading, setQueryText } = useTranslationGPT()

  const handleSubmit = (event) => {
    event.preventDefault()
    setQueryText(textareaValue)
  }

  const handleOnChange = (event) => {
    setTextareaValue(event.target.value)
  }

  return (
    <>
      <header>
        <h1>Translate GPT</h1>
      </header>

      <main>
        <section>
          <h2>Ingrese su consulta</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor='texto'>Texto:</label>
            <textarea id='textToTranslate' name='textToTranslate' rows='5' cols='40' onChange={handleOnChange} />
            <button type='submit'>Enviar</button>
          </form>
        </section>

        <section>
          <h2>Texto generado</h2>
          {loading && <p>Translating...</p>}
          {!loading && Object.keys(translation).length > 0 &&
            <>
              <p><strong>W: </strong>{translation.writing}</p>
              <p><strong>S: </strong>{translation.speaking}</p>
              <p><strong>C: </strong>{translation.coloquial}</p>
            </>}

        </section>
      </main>
    </>
  )
}

export default App
