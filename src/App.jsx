
import Ad from './Ad/Ad'
import './App.scss'
import Category from './Category/Category'
import Footer from './Footer/Footer'
import Hero from './Hero/Hero'
import Header from './Header/Header'
import Support from './Support/Support'
import Testimonial from './Testimonial/Testimonial'

function App() {

  return (
    <div className='w-full'>
      <Header />
      <Hero />
      <div className='space-y-18'>
      <Category />
      <Support />
      <Ad />
      <Testimonial />
      <Footer />
      </div>
      
    </div>

  )
}

export default App
