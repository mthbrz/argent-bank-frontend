import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/Home'
import Login from './pages/Login'
import User from './pages/User'
// import store from './store'
import './main.css'

function App() {

  return (
    <>
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
        </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App

