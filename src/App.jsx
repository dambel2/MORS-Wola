import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./Pages/Home/Home"
import Onas from "./Pages/Onas/Onas"

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="onas" element={<Onas />} />
      </Route>
    </Routes>
  )
}

export default App
