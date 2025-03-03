import React from 'react';
import './MoodMenu.css';
import { useNavigate } from 'react-router-dom';
export default function MoodMenu() {
    const navigate = useNavigate();
    const handleMoodSelect = (mood) => {
        navigate(`/quotes?mood=${mood}`);
    };
    return (
        <div className="div5">
            <h2 className='h21'>Select Your Mood</h2>
            <div className="div6">
                <button className="happy" onClick={() => handleMoodSelect('happy')}>Happy</button>
                <button className="sad" onClick={() => handleMoodSelect('sad')}>Sad</button>
                <button className="motivate" onClick={() => handleMoodSelect('motivate')}>Motivate</button>
                <button className="depression" onClick={() => handleMoodSelect('depression')}>Depression</button>
            </div>
        </div>
    );
}
