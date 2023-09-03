import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Form_Validation from './Components/Form_Validation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Form_Validation/>
    </>
  )
}

export default App
