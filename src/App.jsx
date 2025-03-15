
import Ad from './Ad/Ad'
import './App.scss'
import Category from './Category/Category'
import Footer from './Footer/Footer'
import Hero from './Hero/Hero'
import Support from './Support/Support'
import Testimonial from './Testimonial/Testimonial'

function App() {
  
  return (
    <div className='w-full flex space-y-16 flex-col'>
        <Hero/>
        <Category/>
        <Support/>
        <Ad/>
        <Testimonial/>
        <Footer/>
    </div>
 
  )
}

export default App
