import React, { useState } from 'react';
import './BiWeeklyCarousel.css'; // Ensure this CSS file is updated as shown below
import logoImage from '../images/update-images/LOGO-BlackBackground.png';

const updatesData = [
    {
        date: "11/1/2024",
        title: "The Website has Launched!",
        image: logoImage,
        description: "Welcome to the website's launch! This is a big day as I will try to add some small multiplayer games to this website."
    },
];

const BiWeeklyCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % updatesData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + updatesData.length) % updatesData.length);
    };

    const currentUpdate = updatesData[currentIndex];

    return (
        <div className="carousel-container">
            <button className="arrow left-arrow" onClick={handlePrev}>&lt;</button>
            <div className="update-card">
                <h3>{currentUpdate.date} {currentUpdate.title}</h3>
                <hr />
                <div className="content-container">
                    {currentUpdate.image && <img src={currentUpdate.image} alt={currentUpdate.title} className="update-image" />}
                    <p>{currentUpdate.description}</p>
                </div>
            </div>
            <button className="arrow right-arrow" onClick={handleNext}>&gt;</button>
        </div>
    );
};

export default BiWeeklyCarousel;
