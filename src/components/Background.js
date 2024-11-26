import React from 'react';
import BackgroundImage from '../images/Background.png'; // Adjust the path as necessary

const backgroundStyle = {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100vw',
    height: '100vh',
    paddingTop: '200px',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
};

function Background() {
    return (
        <div style={backgroundStyle} />
    );
}

export default Background;
