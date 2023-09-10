import { LoaderParagraph } from './LoaderParagraph'

export const Translations = ({ translation, loading }) => {
  return (
    <section className="flex flex-col gap-2">
      {loading && <LoaderParagraph />}
      {!loading && Object.keys(translation).length > 0 && (
        <>
          <p>
            <strong>Writing: </strong>
            {translation.writing}
          </p>
          <p>
            <strong>Speaking: </strong>
            {translation.speaking}
          </p>
          <p>
            <strong>Coloquial: </strong>
            {translation.coloquial}
          </p>
        </>
      )}
    </section>
  )
}
