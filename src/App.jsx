import { useState } from 'react'
import './App.css'
import Navbar from "./component/Navigation/Navbar.jsx"
import Home from  "./component/pages/Home.jsx"
import Contact from "./component/pages/Contact.jsx"
import Feedback from "./component/pages/Feedback.jsx"
import SavedJob from "./component/pages/SavedJob.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <Contact />
      <Feedback />
      <SavedJob />
    </>
  )
}

export default App
