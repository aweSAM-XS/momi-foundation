import valley from '../../assets/background.png'
export default function Hero() {
    return (
        <div className='hero'>
				<img alt="valley" src={ valley } />
			<div className='hero-content'>
                <div className='hero-text'>
					<h1>XYZ Foundation</h1>
					<h3>Nothing is impossible</h3>
                    <p>
					Non Profit organization that looks forward to empowering the community through education, technology, etc
                    </p>
                </div>
                <div className='hero-actions'>
                    <a href='#support'>Support</a>
                    <a href='#contact'>Contact</a>
                </div>
            </div>
        </div>
    );
}
