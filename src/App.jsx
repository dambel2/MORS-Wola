import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./Pages/Home/Home"
import Kariera from "./Pages/Kariera/Kariera"
import Rodo from "./Pages/Kariera/Rodo"

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="kariera" element={<Kariera />}/>
        <Route path="rodo" element={<Rodo />} />
      </Route>
    </Routes>
  )
}

export default App
