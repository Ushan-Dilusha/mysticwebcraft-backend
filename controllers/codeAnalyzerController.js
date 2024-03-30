// controllers/codeComplexityController.js

const { analyzeCodeComplexity } = require('../models/codeAnalyzer');

exports.analyzeCode = async (req, res) => {
    const code = req.body.code;
    if (!code) {
        return res.status(400).json({ error: 'Please provide code to analyze.' });
    }

    try {
        const result = await analyzeCodeComplexity(code);
        return res.json({ complexity: result });
    } catch (error) {
        console.error('Error analyzing code complexity:', error);
        return res.status(500).json({ error: 'An error occurred while analyzing the code complexity.' });
    }
};
