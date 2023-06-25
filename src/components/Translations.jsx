export const Translations = ({ translation, loading }) => {
  return (
    <section className='translations'>
      {loading && <p aria-busy={loading}>Generando la traduccion</p>}
      {!loading && Object.keys(translation).length > 0 &&
        <div className='translations__results'>
          <p><strong>W - </strong>{translation.writing}</p>
          <p><strong>S - </strong>{translation.speaking}</p>
          <p><strong>C - </strong>{translation.coloquial}</p>
        </div>}
    </section>
  )
}
