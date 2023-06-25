export const Form = ({ handleSubmit, handleOnChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='texto'>Texto a traducir</label>
      <textarea id='textToTranslate' name='textToTranslate' rows='5' cols='40' onChange={handleOnChange} />
      <button type='submit' role='button'>Enviar</button>
    </form>
  )
}
