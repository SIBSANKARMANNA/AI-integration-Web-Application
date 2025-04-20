// controllers/recommendationController.js
const axios = require('axios');

exports.getRecommendations = async (req, res) => {
  try {
    const { prompt } = req.body;
    // console.log('prompt:', prompt);

    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'openai/gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: `Give a short and clear explanation or recommendation based on the following interest: ${prompt}. Keep the response under 160 words.`
          }
        ]
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    // console.log('response',response);
    const aiResponse = response.data.choices[0].message.content;
    // console.log('aiResponse',aiResponse);
    res.status(200).json({ recommendation: aiResponse });

  } catch (error) {
    console.error('AI recommendation error:', error?.response?.data || error.message);
    res.status(500).json({ error: 'Failed to get recommendation from AI' });
  }
};





// Hugging Face Sentiment Analysis using distilBERT
exports.analyzeSentiment = async (req, res) => {
  const { text } = req.body;

  // Ensure that text is provided
  if (!text) {
    return res.status(400).json({ message: 'Text input is required.' });
  }

  try {
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english',
      { inputs: text },
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    // Hugging Face returns an array of arrays of objects
    const predictions = response.data?.[0];
    const topPrediction = predictions?.[0];

    if (topPrediction) {
      res.json({ sentiment: topPrediction.label, confidence: topPrediction.score });
    } else {
      res.status(404).json({ message: 'Sentiment analysis failed' });
    }
  } catch (error) {
    console.error('Sentiment analysis error:', error.response?.data || error.message);
    res.status(500).json({ message: 'AI sentiment service error' });
  }
};
