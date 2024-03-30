// models/codeComplexityModel.js

async function analyzeCodeComplexity(code) {
    try {
        const complexity = calculateComplexity(code);
        return complexity;
    } catch (error) {
        console.error('Error analyzing code complexity:', error);
        throw new Error('Failed to analyze code complexity');
    }
}

function calculateComplexity(code) {
    const numLoops = countLoops(code);
    const numConditions = countConditions(code);
    return numLoops + numConditions;
}

function countLoops(code) {
    return (code.match(/for\s*\(/g) || []).length + (code.match(/while\s*\(/g) || []).length;
}

function countConditions(code) {
    return (code.match(/if\s*\(/g) || []).length + (code.match(/else\s*if\s*\(/g) || []).length;
}

module.exports = { analyzeCodeComplexity };
