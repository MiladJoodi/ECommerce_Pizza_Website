import About from "./Sections/About"
import Contact from "./Sections/Contact"
import Faq from "./Sections/Faq"
import Footer from "./Sections/Footer"
import BestSellers from "./Sections/BestSellers"
import Header from "./Sections/Header"
import Hero from "./Sections/Hero"
import TopRated from "./Sections/TopRated"
import { DarkModeProvider } from "./DarkModeContext"

function App() {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <Hero />
        <About />
        <TopRated />
        <BestSellers />
        <Faq />
        <Contact />
        <Footer />
      </DarkModeProvider>

    </>
  )
}

export default App