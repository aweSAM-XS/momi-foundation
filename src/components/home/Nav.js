import logo from '../../assets/logo.png';
import './home.css';
export default function Nav() {
    return (
        <nav className='nav'>
                <div className='logo-container'>
                    <img alt='logo' className='logo' src={logo}></img>
                </div>
            <div className='nav-items'>
                <li className='nav-item'>
                    <a href='#home'>Home</a>
                </li>
                <li className='nav-item'>
                    <a href='#about'>About</a>
                </li>
                <li className='nav-item'>
                    <a href='#gallery'>Gallery</a>
                </li>
                <li className='nav-item'>
                    <a href='#support'>Support</a>
                </li>
            </div>
        </nav>
    );
}
