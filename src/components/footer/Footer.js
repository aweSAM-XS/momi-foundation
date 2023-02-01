import './Footer.css';
import Nav from '../home/Nav';
import Socials from '../home/Socials';

export default function Footer() {
    return (
        <footer className='footer'>
            <Nav place='footer-nav' />
            <div className='footer-content'>
                <p className='copyright'>
                    Copyright ©2023 by Momi Foundation. All rights reserved.
                </p>
                <p className='designed-by'>
                    Website designed and developed by{' '}
                    <a className='awesam' href='https://awesam.tech'>
                        AWESAM
                    </a>
                    .
                </p>

                <p className='trademark'>
                    Momi Foundation is a registered trademark in Kenya. Momi
                    Foundation products and services are protected by patents,
                    trademarks, and other proprietary rights.
                </p>
            <Socials />
            </div>
        </footer>
    );
}
