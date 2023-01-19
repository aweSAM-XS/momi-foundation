import ezron from '../../assets/ezron.png';
import './About.css';
export default function About() {
    return (
        <div id='about'>
            <h2 className='heading about'>About</h2>
            <div className='about-content'>
                <div className='about-image'>
                    <img alt='about' src={ezron} className='about-img' />
                </div>
                <div className='about-text'>
                    <p>
                        Momi Foundation is a non-profit organization is
                        dedicated to empowering our community through education
                        and technology. We believe that access to these
                        resources is essential for individuals to reach their
                        full potential.
                    </p>
                    <p>
                        We have a strong track record of making a difference,
                        through organizing football tournaments, visiting
                        children's homes, donating computers, and helping pay
                        school fees for needy students.
                    </p>
                    <p>
                        We are committed to continuing our work to ensure that
                        everyone in our community has the opportunity to
                        succeed.
                    </p>
                </div>
            </div>
        </div>
    );
}
