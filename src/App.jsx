import './App.scss'
import { About, Banner, Blog, ClientList, Faq, Feature, Footer, Hero, Navbar, Service, Statistics, Testimonials } from './components'
import { useStateContext } from './utils/StateContext'

function App() {
  const {dark} = useStateContext()

  return (
    <div style={dark[2]}>
      <Navbar/>
      <Hero/>
      <ClientList/>
      <About/>
      <Service/>
      <Feature/>
      <Testimonials/>
      <Statistics/>
      <Blog/> 
      <Faq/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default App
