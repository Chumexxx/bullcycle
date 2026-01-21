import './App.css'
import LandingPage from './Pages/LandingPage'
import LegalNotice from './Pages/LegalNotice'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/legal-notice" element={<LegalNotice />} />
      </Routes>
    </Router>
  )
}

export default App
