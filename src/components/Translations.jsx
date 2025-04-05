import { FaCopy } from 'react-icons/fa'

import { LoaderParagraph } from './LoaderParagraph'

export const Translations = ({ translation, loading }) => {
  const arrayTranslation = Object.entries(translation)

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <section className="flex flex-col gap-6">
      {loading && <LoaderParagraph />}
      {!loading &&
        arrayTranslation.length > 0 &&
        arrayTranslation.map((item, idx) => (
          <div key={idx}>
            <h2 className="text-xl font-bold capitalize text-sky-800">
              {item[0]}
            </h2>
            <p className="relative text-xl leading-relaxed opacity-50">
              {item[1]}
              <button className="ml-2" onClick={() => handleCopy(item[1])}>
                <FaCopy className="size-4" />
              </button>
            </p>
          </div>
        ))}
    </section>
  )
}
