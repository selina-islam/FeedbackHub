
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import SectionMaintain from './Components/HomePage/SectionMaintain'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <SectionMaintain/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
