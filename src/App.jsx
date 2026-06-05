import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/home'
import Detail from './pages/detail'

function App() {
  return (


    <div
      className="min-h-screen text-gray-800"
      style={{
        backgroundImage: 'url(/langit.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >


      <div className="min-h-screen bg-black/30">


        <Navbar />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:city" element={<Detail />} />
        </Routes>

      </div>
    </div>
  )
}

export default App