import React from 'react' 
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom' 
import About from './pages/About'
import Resume from './pages/Resume'
import Header from './components/Utilies/Header'
import Works from './pages/Works'

function App() {
  return (
    <>
      <Header /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/my-works' element={<Works />} />
      </Routes>
    </>
  )
}

export default App