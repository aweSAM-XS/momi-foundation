import './Gallery.css';
import tournament1 from '../../assets/tournament1.png';
import tournament2 from '../../assets/tournament2.png';
import tournament3 from '../../assets/tournament3.png';
import tournament4 from '../../assets/tournament4.png';
import tournament5 from '../../assets/tournament5.png';
import tournament6 from '../../assets/tournament6.png';
import kapchesewes1 from '../../assets/kapchesewes1.png';
import kapchesewes2 from '../../assets/kapchesewes2.png';

export default function Gallery() {
    return (
        <div id='gallery'>
            <h2 className='heading gallery'>Gallery</h2>
            <div className='gallery-items'>
                <div className='gallery-item'>
                    <img
                        className='gallery-img'
                        alt='gallery'
                        src={tournament1}
                    />
                </div>
                <div className='gallery-item'>
                    <img
                        className='gallery-img'
                        alt='gallery'
                        src={tournament2}
                    />
                </div>
                <div className='gallery-item'>
                    <img
                        className='gallery-img'
                        alt='gallery'
                        src={tournament3}
                    />
                </div>
                <div className='gallery-item'>
                    <img
                        className='gallery-img'
                        alt='gallery'
                        src={tournament4}
                    />
                </div>
                <div className='gallery-item'>
                    <img
                        className='gallery-img'
                        alt='gallery'
                        src={tournament5}
                    />
                </div>
                <div className='gallery-item'>
                    <img
                        className='gallery-img'
                        alt='gallery'
                        src={tournament6}
                    />
                </div>
                <div className='gallery-item'>
                    <img
                        className='gallery-img'
                        alt='gallery'
                        src={kapchesewes1}
                    />
                </div>
                <div className='gallery-item'>
                    <img
                        className='gallery-img'
                        alt='gallery'
                        src={kapchesewes2}
                    />
                </div>
            </div>
        </div>
    );
}
