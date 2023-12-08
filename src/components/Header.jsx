import PropTypes from 'prop-types';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

function Header(props) {

    const login = props.user
        ? <span>Bienvenue {props.user} !</span>
            : <span>Connectez-vous !</span>


// privilégier la méthode du dessus (condition ternaire) du moment que la logique est simple car plus compacte
// let login = '';
// if (user) {
//     login = <span>Bienvenu {user} ! </span>
// }else {
//     login = <span>Connectez-vous !</span>
// }
// 
    return (
    <div>
        <nav className="navbar bg-body-tertiary bg-dark navbar-expand-lg" data-bs-theme="dark">
            <div className="container-fluid">
                <div className="navbar-brand" href="#">
                    <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top mt-1"/>
                    MOOC REACT
                </div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Counter" className="nav-link">Counter</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Login"className="nav-link" >Login</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/register" className="nav-link">Inscrivez-vous !</Link>
                    </li>
                </ul>
                <div className='navbar-text'>
                    {login}
                </div>
            </div>
        </nav>
    </div>
    );
}

Header.propTypes = {
    user: PropTypes.string
}
export default Header;