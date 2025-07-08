import '../main.css'
import { Link } from 'react-router-dom'
import SignIn from './signin'


function Header () {
    return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="/argentBankLogo.webp"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
       <SignIn />
      </div>
    </nav>
  )
}

export default Header
