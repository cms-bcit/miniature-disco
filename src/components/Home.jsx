import banff1 from '../assets/banff-main.jpg';
import breton1 from '../assets/breton-main.jpg';
import jasper1 from '../assets/jasper-main.avif';
import '../Home.css';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

function Home() {
    const [showWelcome, setShowWelcome] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowWelcome(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='container1'>
            <h1 className='home-title'>Best Parks In Canada</h1>
        
                {showWelcome && <p className='welcome-message'>Welcome!</p>}
            
             <motion.img
                src={banff1}
                className="home-pics"
                alt="Banff National Park"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.1 }}
            />

            <motion.img 
                src={jasper1}
                className="home-pics"
                alt="Jasper National Park"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            />

            <motion.img 
                src={breton1}
                className="home-pics"
                alt="Cape Breton Highlands National Park"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
            />

            <p className='tagline'>Discover your next destination!</p>
        </div>
    );
}

export default Home;