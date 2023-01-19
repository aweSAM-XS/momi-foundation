import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import whatsapp from '../../assets/whatsapp.png';
import email from '../../assets/email.png';
import valley from '../../assets/background.png';

export default function Hero() {
    return (
        <div className='hero'>
            <div className='hero-content'>
                <div className='hero-title'>
                    <h1 className='title'>
                        MOMI
                        <br />
                        FOUNDATION
                    </h1>
                    <h2 className='subtitle'>Nothing is impossible</h2>
                </div>
                          <div className='counter'>
                      <div  className='counter-item' >50 <br/> Balls</div>
            <div className='counter-item'>20 <br /> Computers</div>
            <div className='counter-item'>30 <br /> Books</div>
                      <div className='counter-item'>10 <br /> Students</div>
                      </div>      
                <div className='hero-btn'>
                    <div className='socials'>
                        <a href='linkedin.com/momi-foundation'>
                            <img
                                alt='linkedin icon'
                                src={linkedin}
                                className='social-icon'></img>
                        </a>
                        <a href='github.com/momi-foundation'>
                            <img
                                alt='github icon'
                                src={github}
                                className='social-icon'></img>
                        </a>
                        <a href='facebook.com/momi-foundation'>
                            <img
                                alt='facebook'
                                src={facebook}
                                className='social-icon'></img>
                        </a>
                        <a href='twitter.com/momi-foundation'>
                            <img
                                alt='twitter icon'
                                src={twitter}
                                className='social-icon'></img>
                        </a>
                        <a href='chat.whatsapp.com/momi-foundation'>
                            <img
                                alt='whatsapp icon'
                                src={whatsapp}
                                className='social-icon'></img>
                        </a>
                        <a href='mailto:momi@foundation.tech'>
                            <img
                                alt='email icon'
                                src={email}
                                className='social-icon'></img>
                        </a>
                    </div>
                    <div className='cta-btn'>
                        <a href='#support' className='btn'>
                            Support
                        </a>
                        <a href='#contact' className='btn'>
                            Contact
                        </a>
                    </div>
                </div>
            </div>
            <div className='hero-img'>
                <img alt='valley' src={valley} className='hero-img'></img>
            </div>
        </div>
    );
}
