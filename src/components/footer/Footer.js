import './Footer.css';
import logo from '../../assets/logo.png';
import Nav from '../home/Nav';
import Socials from '../home/Socials';

export default function Footer() {
    return (
        <footer className='footer'>
            <img alt='logo' className='logo' src={logo}></img>
            <div className='footer-content'>
                <Nav place='footer-nav' />
                <p>Copyright ©2023 by Momi Foundation. All rights reserved.</p>
                <p>
                    Website designed and developed by{' '}
                    <a className='awesam' href='https://awesam.tech'>
                        AWESAM
                    </a>
                </p>
                <Socials />
            </div>
        </footer>
    );
}
