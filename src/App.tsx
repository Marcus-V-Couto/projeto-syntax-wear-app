import { Categories } from "./components/Categories"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Gallery } from "./components/Gallery"
import { Footer } from "./components/Footer"

function App() {

  return (
    <>
      <Header />
      <main className="py-10">
        <Hero />
        <Categories />
        <Gallery />
      </main>
      <Footer />
    </>
  )
}

export default App
