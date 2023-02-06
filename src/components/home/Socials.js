import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import whatsapp from '../../assets/whatsapp.png';
import email from '../../assets/email.png';

export default function Socials () {
	return (
		<div className='hero-btn'>
                    <div className='socials'>
                        <a href='https://www.linkedin.com/company/momi-foundation/'>
                            <img
                                alt='linkedin icon'
                                src={linkedin}
                                className='social-icon'></img>
                        </a>
                        <a href='https://github.com/momi-foundation-coding'>
                            <img
                                alt='github icon'
                                src={github}
                                className='social-icon'></img>
                        </a>
                        <a href='https://facebook.com/momi-foundation'>
                            <img
                                alt='facebook'
                                src={facebook}
                                className='social-icon'></img>
                        </a>
                        <a href='https://twitter.com/momi-foundation'>
                            <img
                                alt='twitter icon'
                                src={twitter}
                                className='social-icon'></img>
                        </a>
                        <a href='https://chat.whatsapp.com/momi-foundation'>
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
		</div>
	)
}