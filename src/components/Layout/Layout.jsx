import { Outlet } from "react-router-dom"
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"

const Layout = () => {
  return (
    <div className="site-wrapper">
        <NavBar />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout
