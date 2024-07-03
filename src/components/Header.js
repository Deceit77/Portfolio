import React, { useState, useEffect } from 'react';
import backg from './backg.jpg'; // Import your background image
import './Header.css';

const Header = () => {
    const [displayText1, setDisplayText1] = useState('');
    const [toggle1, setToggle1] = useState(false);
    const [displayText2Index, setDisplayText2Index] = useState(0);
    const texts = ['C','C++','C#','PYTHON','JS', 'Web Design','MERN STACK','Photography', 'Video Editing','अरु कुनै कुरा आउँदैन'];

    useEffect(() => {
        const text1 =  'स्वागतम्!';
        let index1 = 0;

        const interval1 = setInterval(() => {
            if (index1 < text1.length) {
                setDisplayText1(text1.slice(0, index1 + 1));
                index1++;
            } else {
                clearInterval(interval1);
                setTimeout(() => {
                    setDisplayText1('');
                    setToggle1((prev) => !prev);
                }, 2000);
            }
        }, 150);

        return () => clearInterval(interval1);
    }, [toggle1]);

    useEffect(() => {
        const interval3 = setInterval(() => {
            setDisplayText2Index((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2000);

        return () => clearInterval(interval3);
    }, [texts.length]); // Add texts.length to the dependency array

    const headerStyle = {
        backgroundImage: `url(${backg})`, // Set the background image from imported variable
        backgroundSize: 'cover', // Ensure the background image covers the entire header
        backgroundPosition: 'center', // Center the background image
        height: '100vh', // Ensure full viewport height
        overflow: 'hidden', // Prevent content overflow
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', // Align content to the right side
        padding: '20px',
        color: 'white',
    };

    return (
        <header style={headerStyle}>
            <div className="header-content">
                <div className="header-text">
                    <h1 className='upp'><u>{displayText1}</u></h1>
                    <p className='p1'><b>"Developer" I Call Myself 👨‍💻"</b></p>
                    <p className='p1'><b>But for Others I'm: "Screen Stalker"</b></p>
                    <h2 className='down'>{texts[displayText2Index]}</h2>
                </div>
            </div>
        </header>
    );
};

export default Header;
