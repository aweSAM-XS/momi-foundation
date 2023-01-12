import logo from '../../assets/logo.png'
import './home.css';
export default function Nav() {
	return (
		<nav className="nav">
			<li className="nav-item"><a href="#Home">Home</a></li>
			<li className="nav-item"><a href="#Home">About</a></li>
			<li className="nav-item"><a href="#Home"><img alt='logo' className='logo' src={logo}></img></a></li>
			<li className="nav-item"><a href="#Home">Support</a></li>
			<li className="nav-item"><a href="#Home">Contact</a></li>
		</nav>
	)
}