
import './App.scss'
import Category from './Category/Category'
import Hero from './Hero/Hero'

function App() {
  
  return (
    <div className='w-screen px-32 max-md:px-16 max-sm:px-8 pt-4 msd:pt-8 flex space-y-16 flex-col'>
        <Hero/>
        <Category/>
    </div>
 
  )
}

export default App
