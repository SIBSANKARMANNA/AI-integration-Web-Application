// frontend/src/api/aiApi.js

import axios from 'axios';

// Fetch AI-powered recommendations with token
export const getRecommendations = async ({prompt}) => {
  // console.log(userPreferences);
  try {
    const token = localStorage.getItem('token'); // assuming token is stored in local storage
    const response = await axios.post(
      `http://localhost:5000/api/ai/recommendations`,
      {prompt},
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    throw error;
  }
};

// Analyze sentiment of a given text with token
export const analyzeSentiment = async (text) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(
      `http://localhost:5000/api/ai/sentiment`,
      { text },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error analyzing sentiment:", error);
    throw error;
  }
};
