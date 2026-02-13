import './App.css'
import {MainPage} from './components/Main/MainPage'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/MainPage" replace />} />

        <Route path="/MainPage" element={<MainPage />} />
      </Routes>
    </BrowserRouter>

  )

}

export default App
