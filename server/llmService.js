const { OpenAI, Configuration, OpenAIApi } = require("openai");
require('dotenv').config();

// Initialize the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


async function queryLLM(expandedQuery) {
    // Parsing the expandedQuery to separate the question and context
    const [questionPart, contextPart] = expandedQuery.split('\n\nContext:\n');
    const question = questionPart.replace('Question: ', '');
    const context = contextPart;

    // Messages to be sent to OpenAI
    const messages = [
        { "role": "system", "content": context },
        { "role": "user", "content": question }
    ];

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: messages
        });
        
        const message = completion.choices[0].message.content;
  
        if (typeof message === 'string') {
        const trimmedMessage = message.trim();
        return trimmedMessage;
        } else {
        console.error('Expected a string but received:', message);
        }
        
    } catch (error) {
        console.error('Error querying LLM:', error);
        throw new Error('Failed to query the language model.');
    }
}

module.exports = { queryLLM };
