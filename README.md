# AI Integration Web Application

## Overview

Welcome to the **AI Integration Web Application**! This project implements an authenticated web application that leverages AI to provide powerful features such as sentiment analysis and content recommendation. Using pretrained AI models, users can analyze sentiment in text and receive personalized content recommendations in real-time.

### Key Features:
- **Sentiment Analysis**: Uses Hugging Face’s [distilbert-base-uncased-finetuned-sst-2-english](https://huggingface.co/distilbert-base-uncased-finetuned-sst-2-english) model for analyzing sentiment in text (positive or negative).
- **Content Recommendation**: Leverages OpenRouter’s [v1/chat/completions](https://openrouter.ai/) model for providing personalized content suggestions based on user interaction and preferences.

## Technical Stack:
- **Frontend**: React.js – A fast and responsive user interface.
- **Backend**: Node.js – A lightweight and scalable backend environment.
- **Database**: MongoDB – A flexible NoSQL database for storing user data and interaction logs.
- **AI Integration**:
  - **HuggingFace**: For sentiment analysis using `distilbert-base-uncased-finetuned-sst-2-english`.
  - **OpenRouter**: For content recommendation using the `v1/chat/completions` model.

## Getting Started

Follow the steps below to get your development environment set up and run the project locally.

### Prerequisites:
- Node.js >= 14.x
- MongoDB
- API Keys for HuggingFace and OpenRouter (You will need to sign up on their platforms and get API keys).

### 1. Clone the Repository
git clone https://github.com/yourusername/ai-integration-web-application.git
cd ai-integration-web-application
2. Install Dependencies
Backend (Node.js)
bash
Copy
Edit
cd backend
npm install
Frontend (React.js)
bash
Copy
Edit
cd frontend
npm install
3. Environment Configuration
Create a .env file in the backend and frontend directories and add the necessary environment variables:

Backend (.env):

HUGGINGFACE_API_KEY=<your-huggingface-api-key>

OPENROUTER_API_KEY=<your-openrouter-api-key>

MONGODB_URI=<your-mongodb-connection-uri>

Frontend (.env):

REACT_APP_API_URL=<your-backend-api-url>

4. Run the Application
Start the Backend (Node.js):
bash
Copy
Edit
cd backend
npm start
Start the Frontend (React.js):
bash
Copy
Edit
cd frontend
npm start
Visit http://localhost:3000 in your browser to access the application.

## Usage
Sentiment Analysis: Enter text in the input field, and the application will analyze the sentiment of the text (positive or negative) using the Hugging Face model.

Content Recommendation: Based on your preferences, the application will provide personalized content suggestions using the OpenRouter model.

## Live Project
A live demo of this application is available at:
Live Demo---https://ai-integration-web-application.netlify.app/

## Contact
For any inquiries or feedback, feel free to reach out to us at:

Email: your.email@example.com

GitHub: Your GitHub Profile

Built with 💻 by SIBSANKAR MANNA.
