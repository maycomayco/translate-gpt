import { LoaderParagraph } from './LoaderParagraph'

export const Translations = ({ translation, loading }) => {
  const arrayTranslation = Object.entries(translation)

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
            <p className="text-xl leading-relaxed opacity-50">{item[1]}</p>
          </div>
        ))}
    </section>
  )
}
