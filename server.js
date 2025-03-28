const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const generateChat = require('./generateChat.js');

dotenv.config();

const corsOptions = {
  origin: ['http://localhost:5173', 'https://valnat-chatbot.vercel.app/'],
};

app.use(cors(corsOptions));
app.use(express.json());

const apiKey = process.env.GENERATE_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseModalities: [],
  responseMimeType: 'text/plain',
};

const model = genAI.getGenerativeModel({
  model: 'gemini-2.0-flash',
  systemInstruction: 'You are an information provider and an AI chat ',
});

app.post(
  '/ask',
  generateChat

  /*async (req, res) => {
  try {
    const { question } = req.body;
    const chatSession = model.startChat({
      generationConfig,
      systemInstruction: 'You are an information provider and an AI chat.',
    });
    const result = await chatSession.sendMessage(question);
    const text = result.response.text();
    res.json({ answer: text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to generate response' });
  }
}*/
);

app.listen(8080, () => {
  console.log(`server started on port ${8080}`);
});
