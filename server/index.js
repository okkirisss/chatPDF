const express = require('express');
const multer = require('multer');
const fs = require('fs').promises;
const pdfParse = require('pdf-parse');
const axios = require('axios');
const { queryLLM } = require('./llmService');
require('dotenv').config();
const cors = require('cors');
const app = express();
app.use(cors());
const upload = multer({ dest: 'uploads/' }); // store temporarliy in uploads folder


app.use(express.json());

// Route for file upload
app.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const dataBuffer = await fs.readFile(req.file.path);
        const pdfData = await pdfParse(dataBuffer);

        global.pdfText = pdfData.text;

        await fs.unlink(req.file.path); // Clean up the uploaded file
        res.json({ message: 'File uploaded and processed successfully.' });

    } catch (error) {
        console.error('Error processing file:', error);
        res.status(500).send('Error processing file');
    }
    
});

app.post('/ask', async (req, res) => {
    const { question } = req.body;
    
    // Ensure global.pdfText is populated with the PDF text
    if (!global.pdfText) {
        return res.status(400).send('PDF text not available. Please upload a document first.');
    }

    // Segment the PDF text into paragraphs
    const segments = segmentText(global.pdfText);
    
    // Find the most relevant segments for the question
    const relevantSegments = findRelevantSegments(question, segments);
    
    // Check if we found relevant segments
    if (relevantSegments.length === 0) {
        return res.json({ answer: "I couldn't find any relevant information in the document." });
    }

    // Prepare expanded query with relevant segments
    const expandedQuery = `${question}\n\nContext:\n${relevantSegments.join('\n\n')}`;

    try {
        const answer = await queryLLM(expandedQuery); 
        res.json({ answer: answer.trim() });
    } catch (error) {
        console.error('Error querying LLM:', error);
        res.status(500).send('Failed to get an answer from the LLM');
    }
});


function segmentText(text) {
    // Split the text into paragraphs where there are blank lines
    return text.split('\n\n');
}

function findRelevantSegments(question, segments) {
    const questionKeywords = question.toLowerCase().split(' ');
    const relevantSegments = segments.filter(segment => {
        const segmentLower = segment.toLowerCase();
        return questionKeywords.some(keyword => segmentLower.includes(keyword));
    });
    
    // Limiting to the first 3 matches to avoid overwhelming the LLM
    return relevantSegments.slice(0, 3);
}

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
