
import valley from '../../assets/background.png';
import Socials from './Socials';

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
                <Socials />
                    <div className='cta-btn'>
                        <a href='#support' className='btn'>
                            Support
                        </a>
                        <a href='#contact' className='btn'>
                            Contact
                        </a>
                    </div>
                
            </div>
            <div className='hero-img'>
                <img alt='valley' src={valley} className='hero-img'></img>
            </div>
        </div>
    );
}
