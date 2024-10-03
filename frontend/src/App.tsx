import { useEffect, useState } from "react"
import MatesGrid from "./components/Mates/MatesGrid"
import Header from "./components/UI/Header"
import { getMates } from "./services/getMates"
import { MatesType } from "./types";

function App() {
  const [mates, setMates] = useState<MatesType[]>();
  useEffect(() => {
    (async () => {
      const matesData = await getMates();
      setMates(matesData)
    })()
  }, [])
  return (
    <main>
      <Header />
      <section className="flex flex-col items-center my-12">
        <h2 className='font-light text-2xl uppercase text-neutral-500'>Todos nuestros productos</h2>
        {!mates ? <span>Cargando productos...</span> : <MatesGrid mates={mates} />}
      </section>
    </main>
  )
}

export default App
