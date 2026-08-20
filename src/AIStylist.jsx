import React, { useState } from "react";
import "./AIStylist.css";
import { Send, Sparkles, ShoppingBag } from "lucide-react";

export default function AIStylist({ applyLook }) {
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
      // FIX 1: 'h' typo hata diya gaya hai
      const API_KEY = import.meta.env.VITE_API_KEY;

      const url = import.meta.env.VITE_API_URL;

      // FIX 2: API ko sirf role aur content bhejna hai, 'look' property yahan filter ho jayegi
      const cleanHistoryForAPI = updatedHistory.map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

      const messagesForAPI = [
        {
          role: "system",
          content: `You are a professional fashion stylist.
Always respond ONLY in JSON.
Example:
{
 "message":"Olive shirt with beige pants creates a premium smart casual look.",
 "shirt":"#556B2F",
 "pant":"#F5F5DC",
 "shoes":"var(--bg-card)FFF"
}
No markdown. No extra text.`,
        },
        ...cleanHistoryForAPI, // Ab API ko clean array jayega
      ];

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "openai/gpt-oss-120b",
          messages: messagesForAPI,
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();

      if (data.error) {
        console.error(data.error);
        setChatHistory((prev) => [
          ...prev,
          { role: "assistant", content: "Error aa gaya bhai!" },
        ]);
      } else {
        const rawResponse = data.choices[0].message.content;

        try {
          const cleanedResponse = rawResponse
            .replace(/```json|```/gi, "")
            .trim();
          const parsed = JSON.parse(cleanedResponse);

          setChatHistory((prev) => [
            ...prev,
            {
              role: "assistant",
              content: parsed.message || "Here is a stylish look for you!",
              look: parsed, // UI ke liye save ho raha hai, par next time api ko send nahi hoga
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
        {
          role: "assistant",
          content: "Network error hai ya API limit cross ho gayi!",
        },
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

      {/* Chat Messages Area */}
      <div
        className="send-recive-box"
        style={{ maxHeight: "400px", overflowY: "auto", padding: "10px" }}
      >
        {chatHistory.map((msg, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                maxWidth: "75%",
                padding: "10px 15px",
                borderRadius: "15px",
                background: msg.role === "user" ? "#5b21b6" : "#1e293b",
                color: "white",
                boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
              }}
            >
              <div>
                <div>{msg.content}</div>

                {msg.look && (
                  <>
                    <div
                      style={{
                        display: "flex",
                        gap: "8px",
                        marginTop: "10px",
                      }}
                    >
                      {msg.look?.shirt && (
                        <span
                          style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            background: msg.look.shirt,
                            border: "1px solid rgba(255,255,255,0.2)",
                          }}
                          title="Shirt Color"
                        />
                      )}
                      {msg.look?.pant && (
                        <span
                          style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            background: msg.look.pant,
                            border: "1px solid rgba(255,255,255,0.2)",
                          }}
                          title="Pant Color"
                        />
                      )}
                      {msg.look?.shoes && (
                        <span
                          style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            background: msg.look.shoes,
                            border: "1px solid rgba(255,255,255,0.2)",
                          }}
                          title="Shoes Color"
                        />
                      )}
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
                      onClick={() => applyLook(msg.look)}
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
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <div
              style={{
                padding: "10px 15px",
                borderRadius: "15px",
                backgroundColor: "#1e293b",
                fontStyle: "italic",
                color: "#cbd5e1",
              }}
            >
              AI soch raha hai...
            </div>
          </div>
        )}
      </div>

      {/* Footer Input */}
      <div className="ai-input-box">
        <input
          type="text"
          value={input}
          placeholder="Ask AI anything about fashion..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => (e.key === "Enter" ? fetchAIResponse() : null)}
        />
        <button
          onClick={fetchAIResponse}
          disabled={isLoading || input.trim().length === 0}
        >
          <Send size={18} />
        </button>
      </div>

      {/* Extra Actions */}
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
