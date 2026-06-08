// AIStylist.jsx
import React, { useState } from "react";

import "./AIStylist.css";
import { Send, Sparkles, Shirt, Palette, ShoppingBag } from "lucide-react";

export default function AIStylist() {
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAIResponse = async () => {
    if (input.trim() === "") return;

    const newUserMessage = { role: "user", content: input };
    const updatedHistory = [...chatHistory, newUserMessage];

    setChatHistory(updatedHistory);
    setInput("");
    setIsLoading(true);

    try {
      const API_KEY = process.env.APIG_KEY; 
     
      const url = "https://api.groq.com/openai/v1/chat/completions";
      const messagesForAPI = [
        {
          role: "system",
          content:
           `You are a world-class Fashion Stylist, Color Expert, and Personal Image Consultant. Your job is to give users premium, highly personalized fashion advice.

CRITICAL CONVERSATION FLOW:

STEP 1: GATHER INFORMATION
Before giving any outfit recommendations, you MUST politely ask the user for their details (if they haven't already told you). 
Ask them:
1. What is their skin tone? (Fair, medium/wheatish, dark, etc.)
2. Do they wear a Turban, or are they looking for Hairstyle advice? (Never assume everyone wears a turban).

STEP 2: TAILORED ADVICE
Once the user answers, give a highly personalized styling guide.
- CLOTHES: Suggest specific shirt and pant colors that perfectly compliment their skin tone.
- HEADWEAR/HAIR: 
   --> If they wear a Turban: Suggest Turban colors that smartly contrast or match the outfit. DO NOT suggest hairstyles.
   --> If they want Hair advice: Suggest trendy hairstyles or beard styles. DO NOT mention turbans.
- FOOTWEAR: Recommend shoe styles and colors that complete their look.

RULES TO FOLLOW:
- Be highly enthusiastic, polite, and stylish in your tone.
- Always format your advice using clean bullet points and relevant emojis.
- If the user talks in Hindi or Hinglish, you MUST reply in natural, friendly Hinglish.`
        },
        ...updatedHistory,
      ];

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "content-Type": 'application.json',
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: messagesForAPI,
        }),
      });

      const data = await response.json();

      if (data.error) {
        console.error(data.error);
        setChatHistory((prev) => [
          ...prev,
          { role: "assistant", content: "Error aa gaya bhai!" },
        ]);
      } else {
        const aiAnswer = data.choices[0].message.content;
        setChatHistory((prev) => [
          ...prev,
          { role: "assistant", content: aiAnswer },
        ]);
      }
    } catch (error) {
      console.error(error);
      setChatHistory((prev) => [
        ...prev,
        { role: "assistant", content: "Network error hai!" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="ai-panel">
      {/* Header */}
      <div className="ai-header">
        <div>
          <h2>AI Stylist</h2>
          <p>Smart outfit recommendations based on your skin tone & wardrobe</p>
        </div>

        <div className="ai-badge">AI Powered</div>
      </div>

      {/* Chat */}
      {/* <div className="chat-section"> */}

      {/* User Message */}
      {/* <div className="chat user-chat">
          <div className="chat-bubble">
           {input}
          </div>
        </div> */}

      {/* AI Reply */}
      {/* <div className="chat ai-chat">
          <div className="chat-bubble">
            Based on your navy blue jeans and white
            sneakers, these shirts will look amazing
            on you 👌
          </div>
        </div> */}

      {/* </div> */}

      {/* Suggested Colors */}
      {/* <div className="suggestion-box">

        <div className="suggestion-header">
          <Palette size={18} />
          <h3>Best Shirt Colors</h3>
        </div>

        <div className="color-list">

          <div className="color-item">
            <span style={{ background: "#dbeafe" }}></span>
            <p>Sky Blue</p>
          </div>

          <div className="color-item">
            <span style={{ background: "#ffffff" }}></span>
            <p>White</p>
          </div>

          <div className="color-item">
            <span style={{ background: "#d6c3a5" }}></span>
            <p>Beige</p>
          </div>

          <div className="color-item">
            <span style={{ background: "#556b2f" }}></span>
            <p>Olive</p>
          </div>

          <div className="color-item">
            <span style={{ background: "#800020" }}></span>
            <p>Maroon</p>
          </div>

        </div>

      </div> */}

      {/* Outfit Suggestions */}
      {/* <div className="outfit-section">

        <div className="suggestion-header">
          <Shirt size={18} />
          <h3>Recommended Shirts</h3>
        </div>

        <div className="outfit-grid">

          <div className="outfit-card active">
            <img
              src="https://pngimg.com/d/dress_shirt_PNG8117.png"
              alt=""
            />

            <h4>Sky Blue Shirt</h4>

            <p>95% Match</p>
          </div>

          <div className="outfit-card">
            <img
              src="https://pngimg.com/d/dress_shirt_PNG8084.png"
              alt=""
            />

            <h4>White Shirt</h4>

            <p>92% Match</p>
          </div>

          <div className="outfit-card">
            <img
              src="https://pngimg.com/d/shirt_PNG5434.png"
              alt=""
            />

            <h4>Olive Shirt</h4>

            <p>89% Match</p>
          </div>

        </div>

      </div> */}

      {/* AI Tips */}
      {/* <div className="tips-box">

        <div className="suggestion-header">
          <Sparkles size={18} />
          <h3>AI Style Tip</h3>
        </div>

        <p>
          Light and pastel shirts balance dark jeans 
          perfectly and give a clean premium look.
          White sneakers work best with minimal colors.
        </p>

      </div> */}

      {/* Footer Input */}
      <div className="send-recive-box">
       
        {chatHistory.map((msg,index) =>(
          <div key={index} 
           style={{
            display: "flex",
              justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
              marginBottom: '10px'
           }}
          >
              <div style={{ 
                maxWidth: '75%', 
                padding: '10px 15px', 
                borderRadius: '15px', 
                background: msg.role === 'user' ? ' #5b21b6' : '#141a2e', // User ke liye green, AI ke liye white
                color: "white",
                // border: msg.role === 'user' ? 'none' : '1px solid #ddd',
                boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
              }}>
               
                {msg.content}
              </div>

          </div>
        ))}

         {isLoading && (
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <div style={{ padding: '10px 15px', borderRadius: '15px', backgroundColor: '#ffffff', fontStyle: 'italic', color: '#888' }}>
              AI soch raha hai...
            </div>
          </div>
        )}
      </div>
      <div className="ai-input-box">
        <input
          type="text"
          value={input}
          placeholder="Ask AI anything about fashion..."
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => (e.key === "Enter" ? fetchAIResponse() : null)}
        />

        <button    onClick={fetchAIResponse}
          disabled={isLoading || input.length === 0}>
       
          <Send size={18} />
        </button>
      </div>

      {/* Extra */}
      <div className="extra-actions">
        <button>
          <ShoppingBag size={16} />
          Shop Similar
        </button>

        <button>
          <Sparkles size={16} />
          Generate More
        </button>
      </div>
    </div>
  );
}
