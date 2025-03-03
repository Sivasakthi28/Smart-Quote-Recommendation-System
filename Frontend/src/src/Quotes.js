import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Quotes.css';
import { useLocation } from 'react-router-dom';
const Quotes = () => {
    const [quotes, setQuotes] = useState([]);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const mood = searchParams.get('mood') || 'happy'; 
    useEffect(() => {
        fetchQuotes(mood);
    }, [mood]);
    const fetchQuotes = async (selectedMood) => {
        try {
            const response = await axios.get(`http://localhost:3003/quotes/get?mood=${selectedMood}`);
            setQuotes(response.data);
        } catch (error) {
            console.error('Error fetching quotes:', error);
        }
    };
    return (
        <div className="div7">
            <h1 className="h12">Quotes for {mood.charAt(0).toUpperCase() + mood.slice(1)} Mood</h1>
            <div className="div8">
                {quotes.length > 0 ? (
                    quotes.map((quote) => (
                        <div key={quote._id} className="div9">
                            <p className="l3">{quote.text}</p>
                            <p className="p1">{quote.author}</p>
                        </div>
                    ))
                ) : (
                    <p className="p2">No quotes available for {mood} mood.</p>
                )}
            </div>
        </div>
    );
};
export default Quotes;
