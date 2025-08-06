import '../About.css';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className='container3'>
            <h1 className='abt-title'>About Canada's National Parks</h1>
            <div className='abt-box'>
                <p className='abt-section'>Whether you're a hiking enthusiast, a photography lover, or someone who enjoys adventures with a furry companion, each park offers something special. From towering peaks and turquoise lakes to scenic coastlines and pet-friendly trails, these parks represent just a glimpse of the incredible landscapes that Canada has to offer. Explore each destination, get inspired to travel, and discover why Canada’s wilderness is truly world-class.</p>
            </div>
            <ul className='home-link-box'>
                <li className="home-link">
                    <Link to='/' className='h-link'>Back to Home</Link>
                </li>
            </ul>
        </div>
    );
}

export default About;