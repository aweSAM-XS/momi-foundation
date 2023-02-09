import ezron from '../../assets/ezron.png';
import './About.css';
export default function About() {
    return (
        <div id='about-section'>
            <h2 className='heading about'>About</h2>
            <div className='about-content'>
                <div className='about-image'>
                    <img alt='about' src={ezron} className='about-img' />
                </div>      
                <div className='about-text'>
                    <input type='radio' name='slider' id='mission' />
                    <input type='radio' name='slider' id='about' checked />
                    <input type='radio' name='slider' id='vision' />
                    <header>
                        <label for='mission' className='mission'>
                            Mission
                        </label>
                        <label for='about' className='about'>
                            About
                        </label>
                        <label for='vision' className='vision'>
                            Vision
                        </label>
                        <div className='slider'></div>
                    </header>
                    <div className='cards-area'>
                        <div className='cards'>
                            <div className='card mission-card'>
                                <p>
                                    Our mission is to empower our community
                                    through education and technology. We believe
                                    that access to these resources is essential
                                    for individuals to reach their full
                                    potential.
                                </p>
                            </div>
                            <div className='card about-card'>
                                <p>
                                    Momi Foundation is a non-profit organization
                                    is dedicated to empowering our community
                                    through education and technology. We believe
                                    that access to these resources is essential
                                    for individuals to reach their full
                                    potential.
                                </p>
                                <p>
                                    We have a strong track record of making a
                                    difference, through organizing football
                                    tournaments, visiting children's homes,
                                    donating computers, and helping pay school
                                    fees for needy students.
                                </p>
                                <p>
                                    We are committed to continuing our work to
                                    ensure that everyone in our community has
                                    the opportunity to succeed.
                                </p>
                            </div>
                            <div className='card vision-card'>
                                <p>
                                    Our vision is to see a community where
                                    everyone has access to education and
                                    technology. We believe that access to these resources is essential for individuals to reach their full potential. We are committed to continuing our work to ensure that everyone in our community has the opportunity to succeed. We also believe that access to these resources is essential for individuals to reach their full potential. We are committed to continuing our work to ensure that everyone in our community has the opportunity to succeed.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
