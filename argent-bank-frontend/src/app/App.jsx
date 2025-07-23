import { Route, Routes } from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/footer'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import '../main.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadUserFromStorage } from '../actions/user.action'

function App() {

  const dispatch = useDispatch();

  const isUserChecked = useSelector((state) => state.user.isUserChecked);

  useEffect(() => {
  dispatch(loadUserFromStorage());
  }, [dispatch]);

  if (!isUserChecked) {
  return null;
}

  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App

