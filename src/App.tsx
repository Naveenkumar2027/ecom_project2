import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import WeddingsPage from './pages/WeddingsPage'
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/weddings" element={<WeddingsPage />} />
      {/* Add other routes as needed */}
    </Routes>
  )
}

export default App