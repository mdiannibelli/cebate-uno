import MatesGrid from "./components/Mates/MatesGrid"
import Header from "./components/UI/Header"
import { MatesProvider } from "./context/MatesContext"

function App() {
  return (
    <MatesProvider>
      <main>
      <Header />
      <section className="flex flex-col items-center my-12">
        <h2 className='font-light text-2xl uppercase text-neutral-500'>Todos nuestros productos</h2>
        <MatesGrid />
      </section>
    </main>
    </MatesProvider>
  )
}

export default App
