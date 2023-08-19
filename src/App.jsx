import Feature from './components/Feature'
import Service from './components/Service'
import Featurestyle from './components/Featurestyle'
import Intro from './components/Intro'
import Introstyle from './components/Introstyle'
import Nav from './components/Nav'
import './index.css'
import Servicestyle from './components/Servicestyle'
import Price from './components/Price'
import Pricestyle from './components/Pricestyle'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  return (
    <>   
    <section className='container'>
      <Nav />
      <Intro />
      <Introstyle />
      </section>
      <div className="container">
        <Featurestyle />
      <Feature />
      </div>
      <div className="container">
        <Service />
        <Servicestyle />
      </div>
      <div className="container">
        <Price />
        <Pricestyle />
      </div>
        <Contact />
        <Footer />
    </>
  )
}

export default App
