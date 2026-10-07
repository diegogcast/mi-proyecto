function ToolCard({ nombre, categoria, descripcion }) {
  return (
    <article className="tarjeta">
      <span className="tarjeta__categoria">{categoria}</span>
      <h3 className="tarjeta__nombre">{nombre}</h3>
      <p className="tarjeta__texto">{descripcion}</p>
    </article>
  )
}

export default ToolCard