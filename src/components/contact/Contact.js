import './Contact.css'

export default function Contact() {
	return (
		<div id='contact'>
			<h2 className='heading contact'>Contact</h2>
			<div className='contact-items'>
				<div className='contact-texts'>
					<p className='contact-text'>
						If you would like to get in touch with us, please send us an email through the button below.
					</p>
					<a
						className='contact-btn'
						href='mailto:momi@foundation.com'
						target='_blank'
						rel='noopener noreferrer'>
						Email Us
					</a>
				</div>
			</div>
		</div>
	);
}
