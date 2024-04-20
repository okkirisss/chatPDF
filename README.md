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

**Terminal for frontend**

```bash 
cd client
npm install
npm start
```
**Terminal for backend**

```bash
cd server
npm install
npm start

```