import { useState } from "react"
import Header from "./components/UI/Header"
import { FiltersProvider } from "./context/FiltersContext"
import { MatesProvider } from "./context/MatesContext"
import { SelectorType } from "./types"
import { MatesSection } from "./sections/MatesSection"



function App() {
  const [selector, setSelector] = useState<SelectorType>("mates");

  function handleSelector(type: SelectorType) {
    setSelector(type)
  }
  return (
    <MatesProvider>
      <FiltersProvider>
        <main>
          <Header selector={selector} handleSelector={handleSelector} />
          {
            selector === 'mates' ?
              <MatesSection />
              : ""
          }
        </main>
      </FiltersProvider>
    </MatesProvider>
  )
}

export default App
