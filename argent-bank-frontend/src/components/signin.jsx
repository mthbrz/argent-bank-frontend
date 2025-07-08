import { Link } from 'react-router-dom';
import '../main.css';

function SignIn () {
    return (
        <Link className="main-nav-item" to="/login">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
    )
}

export default SignIn;