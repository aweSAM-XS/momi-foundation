import './Support.css'
import support from '../../assets/background.png';

export default function Support() {
    return (
        <div id='support'>
            <h2 className='heading support'>Support</h2>
            <div className='support-items'>
				<img className='support-img' alt='support' src={ support } />
				<div className='support-texts'>
                    <p className='support-text'>
                        We are a non-profit organization that relies on the
                        generosity of our community to continue our work. If you would like to support our mission, please consider making a donation.
                    <a
                        className='support-btn'
                        href='https://www.paypal.com/donate?hosted_button_id=Z9ZQ9Z7Y9ZQZS'
                        target='_blank'
                        rel='noopener noreferrer'>
                        Donate
                    </a>
                    </p>
                    <p className='support-text'>
                        We are also always looking for volunteers to help with our programs. If you are interested in volunteering, shoot us an email through the button below. 
                        <a
                            className='support-btn'
                            href='mailto:momi@foundation.com'
                            target='_blank'
                            rel='noopener noreferrer'>
                            Join Us
                        </a>
					</p>
					</div>
                </div>
        </div>
    );
}
