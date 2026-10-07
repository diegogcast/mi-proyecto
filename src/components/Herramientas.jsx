import ToolCard from './ToolCard'
import { herramientas } from '../data/herramientas'

function Herramientas() {
  return (
    <section id="herramientas" className="seccion">
      <h2>Herramientas principales</h2>
      <div className="tarjetas">
        {herramientas.map((h) => (
          <ToolCard
            key={h.id}
            nombre={h.nombre}
            categoria={h.categoria}
            descripcion={h.descripcion}
          />
        ))}
      </div>
    </section>
  )
}

export default Herramientas