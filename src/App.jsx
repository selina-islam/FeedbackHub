
import './App.css'
import Navbar from './Components/Navbar'
import { Button } from './Components/ReuseableComponent/Button'

function App() {

  return (
    <>
      <Navbar />
      <Button className='bg-green-600'/>
    </>
  )
}

export default App
