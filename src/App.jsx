import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import payment from "./pages/account"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
      <Route path='payment' element={<payment />}/>
        <Route path='/' element={<index />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
