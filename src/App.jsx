
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import SectionMaintain from './Components/HomePage/SectionMaintain'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <SectionMaintain/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
