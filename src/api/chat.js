// pages/api/chat.js
import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;
  
  if (!message || !message.trim()) {
    return res.status(400).json({ error: "Message is required" });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    console.error("GEMINI_API_KEY is not set");
    return res.status(500).json({ error: "API configuration error" });
  }

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
      {
        contents: [{ parts: [{ text: message }] }]
      },
      {
        timeout: 10000, // 10 second timeout
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    // Check if response has the expected structure
    if (!response.data?.candidates?.[0]?.content?.parts?.[0]?.text) {
      console.error("Unexpected API response structure:", response.data);
      return res.status(500).json({ error: "Invalid response from AI service" });
    }

    const reply = response.data.candidates[0].content.parts[0].text;
    res.status(200).json({ reply });
    
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    
    if (error.code === 'ECONNABORTED') {
      return res.status(408).json({ error: "Request timeout" });
    }
    
    if (error.response?.status === 429) {
      return res.status(429).json({ error: "Rate limit exceeded" });
    }
    
    if (error.response?.status === 401) {
      return res.status(500).json({ error: "API authentication failed" });
    }
    
    res.status(500).json({ error: "Failed to get response from AI service" });
  }
}