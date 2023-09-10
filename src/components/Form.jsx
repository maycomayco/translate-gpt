export const Form = ({ handleSubmit, handleOnChange }) => {
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="chat">
          Texto a traducir
        </label>
        <div className="flex items-center rounded-lg bg-gray-50 px-3 py-2 dark:bg-gray-700">
          <textarea
            className="mx-4 block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            id="textToTranslate"
            name="textToTranslate"
            placeholder="Your message..."
            rows="1"
            onChange={handleOnChange}
          />
          <button
            className="inline-flex cursor-pointer justify-center rounded-full p-2 text-blue-600 hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
            type="submit"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5 rotate-90"
              fill="currentColor"
              viewBox="0 0 18 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
            </svg>
            <span className="sr-only">Enviar</span>
          </button>
        </div>
      </form>
    </section>
  )
}
