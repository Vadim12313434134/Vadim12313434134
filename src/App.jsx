import './App.css'
import {MainPage} from './components/Main/MainPage'
import { SecondPage } from './components/SecondPage/SecondPage'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/MainPage" replace />} />

        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/SecondPage" element={<SecondPage/>}/>
      </Routes>
    </BrowserRouter>

  )

}

export default App
