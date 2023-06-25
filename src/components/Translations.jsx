export const Translations = ({ translation, loading }) => {
  return (
    <>
      {loading && <p aria-busy={loading}>Generando la traduccion</p>}
      {!loading && Object.keys(translation).length > 0 &&
        <>
          <p><strong>W - </strong>{translation.writing}</p>
          <p><strong>S - </strong>{translation.speaking}</p>
          <p><strong>C - </strong>{translation.coloquial}</p>
        </>}
    </>
  )
}
