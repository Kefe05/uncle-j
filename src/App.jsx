// Achivement, Contact, Compnaies, Skills, Footer, 
// sebastian salazar
import Hero from "./Hero/hero"
import Header from "./Header/header"
import About from "./about/about"
import Achievement from "./achivements/achievement"
import Company from "./company/company"
import Comment from "./commendation/comment"
import Footer from "./footer/footer"


function App(){



  return(
  <>
  <div className="together">
    <Header />
    <Hero />
  </div>
   <About />
   {/* <Achievement /> */}
   <Company />
   <Comment />
   <Footer />
  </>
  )
}

export default App