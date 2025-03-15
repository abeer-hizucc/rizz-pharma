
import Ad from './Ad/Ad'
import './App.scss'
import Category from './Category/Category'
import Hero from './Hero/Hero'
import Support from './Support/Support'

function App() {
  
  return (
    <div className='w-full flex space-y-16 flex-col'>
        <Hero/>
        <Category/>
        <Support/>
        <Ad/>
    </div>
 
  )
}

export default App
