# ChatPDF: Interactive PDF Q&A Web Application

## Overview

ChatPDF is a web application that provides an interactive way to explore and understand the contents of PDF documents. It allows users to upload PDF files and ask questions about the uploaded content, offering an intuitive interface to receive answers extracted directly from the text.

## Features

- **PDF Upload**: Simple and secure PDF document upload functionality.
- **Interactive Q&A**: Ask questions and get answers based on the PDF's content.
- **User-Friendly Interface**: Clean and straightforward interface for easy navigation.
- **AI-Powered Analysis**: Advanced AI algorithms to analyze the PDF text and provide relevant answers.

## Getting Started

To use ChatPDF, follow these steps:

1. Navigate to the ChatPDF application.
2. Click on 'Choose PDF' to choose and upload the document you want to query by clicking on "Upload PDF". If the pdf is uploaded successfully, there will be a popup window and a message saying that it is uploaded successfully.
3. After the upload, type your questions into the chat interface.
4. Receive answers that are automatically generated from the PDF content.

## Technical Stack

- Frontend: React
- Backend: Node.js, Express.js
- LLM mode: gpt-3.5-turbo

### Instructions
In the project directory, you should open two terminals.

After Cloning the project repository from Github, you need to firstly install necessary dependencies:

**Terminal for backend**

```bash
cd server
npm install
npm start

```
**Terminal for frontend**

```bash 
cd client
npm install
npm start
```

## Security Considerations

1. **.env for Sensitive Data**: We use `.env` files to manage sensitive configuration options and secrets, ensuring that API keys and other critical information are not hard-coded into the source code.

### Limitations
1. **Format Restrictions**: The application currently only supports the PDF format. Other document types are not supported at this time.

2. **API Dependencies**: The system's functionality is heavily dependent on third-party APIs for AI and ML, which may introduce constraints related to query limits, rate limiting, and changes to API terms and conditions.

3. **Document Complexity**: Complex layouts, such as multi-column text or text mixed with images, might affect the AI's ability to accurately interpret and answer questions.