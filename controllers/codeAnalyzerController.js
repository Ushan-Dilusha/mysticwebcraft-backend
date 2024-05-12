const escomplex = require('escomplex');

const analyzeCodeComplexity = async (req, res) => {
    const codeSnippet = req.body.code;
    // Convert codeSnippet to a single-line JSON string for logging
    const codeSnippetString = JSON.stringify(codeSnippet, null, 0)
        .replace(/(?:\r\n|\r|\n|\t)/g, ''); // Remove line breaks and tabs
    console.log(codeSnippetString);
    try {
        const report = await escomplex.analyse(codeSnippet);
        res.json(report);
    } catch (error) {
        res.json(error.message);
    }
};

module.exports = {
    analyzeCodeComplexity
};
