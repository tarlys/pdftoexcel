import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Parser from './pages/Parser'
import UploadPage from './pages/UploadPage'

function App() {
  // return <Parser />
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<UploadPage />} />
          <Route path='/parser' element={<Parser />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
