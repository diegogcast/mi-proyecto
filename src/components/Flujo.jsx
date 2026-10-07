import { pasos } from '../data/herramientas'

function Flujo() {
  return (
    <section id="flujo" className="seccion">
      <h2>Flujo de trabajo</h2>
      <ol className="flujo">
        {pasos.map((paso, i) => (
          <li key={paso} className="flujo__paso">
            <span className="flujo__numero">{i + 1}</span>
            <span>{paso}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Flujo