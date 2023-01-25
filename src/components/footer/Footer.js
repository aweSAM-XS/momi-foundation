import './Footer.css';
import logo from '../../assets/logo.png';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-img'>
                <img src={logo} alt='Momi Foundation' />
            </div>
            <div className='footer-content'>
                <p class='copyright'>
                    Copyright ©2023 by Momi Foundation. All rights reserved.
                </p>
                <p class='designed-by'>
                    Website designed and developed by{' '}
                    <a className='awesam' href='https://awesam.tech'>
                        AWESAM
                    </a>
                    .
                </p>

                <p class='trademark'>
                    Momi Foundation is a registered trademark in Kenya. Momi
                    Foundation products and services are protected by patents,
                    trademarks, and other proprietary rights.
                </p>
                <p class='thank-you'>Thank you for visiting our website.</p>
            </div>
            <div className='footer-nav'>
                <li>
                    <a href='#home'>Home</a>
                </li>
                <li>
                    <a href='#about'>About</a>
                </li>
                <li>
                    <a href='#gallery'>About</a>
                </li>
                <li>
                    <a href='#support'>Support</a>
                </li>
            </div>
        </footer>
    );
}
