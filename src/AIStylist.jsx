// AIStylist.jsx
import React, { useState } from "react";

import "./AIStylist.css";
import { Send, Sparkles, ShoppingBag } from "lucide-react";

export default function AIStylist({ applyLook}) {
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
      const API_KEY =  VITE_GROQ_API_KEY;

      const url = "https://api.groq.com/openai/v1/chat/completions";
      const messagesForAPI = [
        {
          role: "system",
         content: `
You are a professional fashion stylist.

Always respond ONLY in JSON.

Example:

{
 "message":"Olive shirt with beige pants creates a premium smart casual look.",
 "shirt":"#556B2F",
 "pant":"#F5F5DC",
 "shoes":"#FFFFFF"
}

No markdown.
No extra text.
`
          },
        ...updatedHistory,
      ];

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": 'application/json',
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
       const rawResponse =
data.choices[0].message.content;

try {

  const parsed =
    JSON.parse(rawResponse);

  setChatHistory((prev) => [
    ...prev,
    {
      role: "assistant",
      content: parsed.message,
      look: parsed,
    },
  ]);

} catch {

  setChatHistory((prev) => [
    ...prev,
    {
      role: "assistant",
      content: rawResponse,
    },
  ]);

}
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
               
              <div>

  <div>
    {msg.content}
  </div>

  {msg.look && (

    <>
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginTop: "10px",
        }}
      >

        <span
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: msg.look.shirt,
          }}
        />

        <span
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: msg.look.pant,
          }}
        />

        <span
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: msg.look.shoes,
          }}
        />

      </div>

      <button
        style={{
          marginTop: "10px",
          background: "#7c3aed",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
        onClick={() =>
          applyLook(msg.look)
        }
      >
        Apply Look
      </button>

    </>
  )}

</div>
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
