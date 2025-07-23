import '../main.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../actions/user.action';


function Header () {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { isLoggedIn, user } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };


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
{!isLoggedIn ?(
      <Link className="main-nav-item" to="/login">
        <i className="fa fa-user-circle"></i>
        Sign In
      </Link>) :(
    <span className="main-nav">
      <Link className="main-nav-item" to="/profile">
        <i className="fa fa-user-circle"></i>
        {user?.userName}
      </Link>
      <Link onClick={handleLogout} className="main-nav-item" to="/">
        <i className="fa fa-sign-out"></i>
        Sign Out
      </Link>
    </span>
      ) }
    </nav>
  )
}

export default Header
