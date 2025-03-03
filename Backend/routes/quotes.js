const express = require('express');
const router = express.Router();
const QuoteModel = require('../Models/quoteModel'); 
router.post('/quotes', async (req, res) => {
    try {
        const quotes = req.body; 
        if (!Array.isArray(quotes) || quotes.length === 0) {
            return res.status(400).json({ error: 'Invalid quotes array' });
        }
        const savedQuotes = await QuoteModel.insertMany(quotes);
        res.status(201).json(savedQuotes);
    } catch (error) {
        console.error('Error adding quotes:', error);
        res.status(500).json({ error: 'Failed to add quotes' });
    }
});
router.get('/get', async (req, res) => {
    const mood = req.query.mood;
    try {
        const filter = mood ? { mood } : {}; 
        const filteredQuotes = await QuoteModel.find(filter); 
        res.json(filteredQuotes);
    } catch (error) {
        console.error('Error fetching quotes:', error);
        res.status(500).json({ error: 'Failed to fetch quotes' });
    }
});
module.exports = router;
