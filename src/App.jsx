import Header from './components/Header'
import Intro from './components/Intro'
import Herramientas from './components/Herramientas'
import Flujo from './components/Flujo'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="pagina">
      <Header />
      <main className="contenido">
        <Intro />
        <Herramientas />
        <Flujo />
      </main>
      <Footer />
    </div>
  )
}

export default App