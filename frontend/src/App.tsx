import { useState } from "react"
import Header from "./components/UI/Header"
import { FiltersProvider } from "./context/FiltersContext"
import { MatesProvider } from "./context/MatesContext"
import { SelectorType } from "./types"
import { MatesSection } from "./sections/MatesSection"
import { BombillasSection } from "./sections/BombillasSection"
import BombillasProvider from "./context/BombillasContext"
import { SideMenu } from "./components/CartStore/SideMenu"
import CartProvider from "./context/CartContext"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [selector, setSelector] = useState<SelectorType>("mates");

  function handleSelector(type: SelectorType) {
    setSelector(type)
  }
  return (
    <CartProvider>
      <MatesProvider>
        <BombillasProvider>
          <FiltersProvider>
            <SideMenu />
            <main>
              <Header selector={selector} handleSelector={handleSelector} />
              {
                selector === 'mates' ?
                  <MatesSection />
                  : <BombillasSection />
              }
              <ToastContainer
                position="bottom-right"
                theme="colored"
                autoClose={1500}
                closeOnClick
                className={'text-xs'}
              />
            </main>
          </FiltersProvider>
        </BombillasProvider>
      </MatesProvider>
    </CartProvider>
  )
}

export default App;
