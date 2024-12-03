import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/images/logo.jpg'; 


const Header = () => (
  <header className="header">
    <img src={logo} alt="Logo" className="logo" />
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/artistes">Artistes</Link></li>
        <li><Link to="/services">Services</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
