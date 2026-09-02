import { useState } from "react";
import "./LookBestc.css";

export default function LookBestc() {
  // =
  // SELECTED SKIN COLOR
  // =
  const [skinColor, setSkinColor] = useState("#C68642");

  // =
  // AI RECOMMENDED COLORS
  // =
  const [recommendedColors, setRecommendedColors] = useState([]);

  // =
  // AI LOADING
  // =
  const [isLoading, setIsLoading] = useState(false);

  // =
  // ERROR
  // =
  const [error, setError] = useState("");

  // =
  // 8 PRESET SKIN COLORS
  // User easily select kar sakta hai
  // =
  const skinColorOptions = [
    {
      name: "Light",
      color: "#F8D5C2",
    },
    {
      name: "Fair",
      color: "#F1C6A8",
    },
    {
      name: "Beige",
      color: "#E8B48A",
    },
    {
      name: "Tan",
      color: "#C68642",
    },
    {
      name: "Medium",
      color: "#A96845",
    },
    {
      name: "Brown",
      color: "#7A4932",
    },
    {
      name: "Deep",
      color: "#573021",
    },
    {
      name: "Dark",
      color: "#321810",
    },
  ];

  // =
  // SKIN COLOR CHANGE
  // =
  const handleSkinColorChange = (e) => {
    setSkinColor(e.target.value);

    // New color select hone par
    // purane AI results hata do
    setRecommendedColors([]);

    setError("");
  };

  // =
  // PRESET COLOR SELECT
  // =
  const handlePresetColor = (color) => {
    setSkinColor(color);

    // Purane AI results clear
    setRecommendedColors([]);

    setError("");
  };

  // =
  // AI RESPONSE
  // =
  const fetchAIResponse = async () => {
    setIsLoading(true);
    setError("");
    setRecommendedColors([]);

    try {
      // ========================================
      // ENV VARIABLES
      // ========================================
      const API_KEY = import.meta.env.VITE_API_KEY;
      const url = import.meta.env.VITE_API_URL;

      // ========================================
      // CHECK API CONFIG
      // ========================================
      if (!API_KEY || !url) {
        throw new Error(
          "API key ya API URL missing hai. .env file check karo.",
        );
      }

      // ========================================
      // AI PROMPT
      // ========================================
      const messagesForAPI = [
        {
          role: "system",
          content: `
You are a professional fashion stylist, color analyst,
and men's/women's fashion color expert.

The user will provide their skin color as a HEX value.

Your job is to analyze the exact skin color and recommend
the BEST clothing colors for that person.

Analyze:

1. Skin tone
2. Possible undertone
3. Contrast level
4. Color harmony
5. Fashion compatibility
6. Everyday clothing
7. Premium and stylish clothing colors

IMPORTANT RULES:

- Return EXACTLY 12 clothing colors.
- Do not return fewer than 12.
- Do not return more than 12.
- Do not repeat any color.
- Colors must be useful for shirts, t-shirts,
  jackets, sweaters or other clothing.
- Give every color a clear common English name.
- Give every color a valid 6-digit HEX code.
- HEX must start with #.
- Do not use CSS variables.
- Do not use RGB.
- Do not use HSL.
- Do not use gradients.

Return ONLY valid JSON.

Do NOT use markdown.
Do NOT use code fences.
Do NOT add any explanation outside JSON.

Use exactly this structure:

{
  "skinTone": "Medium",
  "undertone": "Warm",
  "colors": [
    {
      "name": "Navy Blue",
      "hex": "#000080"
    },
    {
      "name": "Olive Green",
      "hex": "#556B2F"
    },
    {
      "name": "Burgundy",
      "hex": "#800020"
    }
  ]
}
          `,
        },

        {
          role: "user",
          content: `
My skin color HEX is ${skinColor}.

Analyze this exact skin color and recommend exactly
12 best clothing colors for me.

Return only JSON.
          `,
        },
      ];

      // ========================================
      // API CALL
      // ========================================
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

      // ========================================
      // API ERROR
      // ========================================
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      // ========================================
      // JSON RESPONSE
      // ========================================
      const data = await response.json();

      console.log("AI Full Response:", data);

      // ========================================
      // CHECK API ERROR
      // ========================================
      if (data.error) {
        throw new Error(data.error.message || "AI API error");
      }

      // ========================================
      // GET AI MESSAGE
      //
      // NOTE:
      // choices plural hota hai
      // ========================================
      const rawResponse = data.choices?.[0]?.message?.content;

      if (!rawResponse) {
        throw new Error("AI response nahi mila.");
      }

      console.log("Raw AI Response:", rawResponse);

      // ========================================
      // CLEAN JSON
      // Agar AI galti se ```json bhej de
      // ========================================
      const cleanedResponse = rawResponse
        .replace(/```json/gi, "")
        .replace(/```/g, "")
        .trim();

      // ========================================
      // PARSE JSON
      // ========================================
      const parsed = JSON.parse(cleanedResponse);

      console.log("Parsed AI Response:", parsed);

      // ========================================
      // CHECK COLORS
      // ========================================
      if (!parsed.colors || !Array.isArray(parsed.colors)) {
        throw new Error("AI ne colors return nahi kiye.");
      }

      // ========================================
      // VALIDATE COLORS
      // ========================================
      const validColors = parsed.colors
        .filter((item) => {
          if (!item.name || !item.hex) {
            return false;
          }

          // Valid HEX check
          return /^#[0-9A-F]{6}$/i.test(item.hex);
        })
        .slice(0, 12);

      // ========================================
      // CHECK 12 COLORS
      // ========================================
      if (validColors.length === 0) {
        throw new Error("AI se valid clothing colors nahi mile.");
      }

      // ========================================
      // SAVE COLORS
      // ========================================
      setRecommendedColors(validColors);
    } catch (error) {
      console.log("LookBest AI Error:", error);

      setError(
        error.message || "Network error hai ya API limit cross ho gayi!",
      );

      setRecommendedColors([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="lookbest-container">
      {/* ======================================
          HEADER
      ====================================== */}

      <div className="lookbest-header">
        <div>
          <h1>LookBest</h1>

          <p>Find the best colors for your skin tone with AI</p>
        </div>
      </div>

      {/* ======================================
          SKIN COLOR SELECTOR
      ====================================== */}

      <div className="skin-selector">
        <h2>Choose Your Skin Color</h2>

        <p className="subtitle">
          Select a skin color below or choose a custom color. AI will find the
          best clothing colors for you.
        </p>

        {/* ====================================
            PRESET SKIN COLORS
        ==================================== */}

        <div className="skin-color-options">
          {skinColorOptions.map((item) => (
            <button
              key={item.color}
              type="button"
              className={`skin-color-option ${
                skinColor === item.color ? "selected" : ""
              }`}
              style={{
                backgroundColor: item.color,
              }}
              onClick={() => handlePresetColor(item.color)}
              title={item.name}
              aria-label={`Select ${item.name} skin color`}
            ></button>
          ))}
        </div>

        {/* ====================================
            PRESET COLOR LABELS
        ==================================== */}

        <div className="skin-color-labels">
          {skinColorOptions.map((item) => (
            <span key={item.color}>{item.name}</span>
          ))}
        </div>

        {/* ====================================
            SELECTED COLOR AREA
        ==================================== */}

        <div className="skin-input-box">
          {/* Custom Color Picker */}

          <input
            type="color"
            value={skinColor}
            onChange={handleSkinColorChange}
            title="Choose custom skin color"
          />

          {/* Selected Skin Circle */}

          <div
            className="skin-preview"
            style={{
              backgroundColor: skinColor,
            }}
          ></div>

          {/* HEX Information */}

          <div className="hex-info">
            <span>Selected Skin Color</span>

            <strong>{skinColor.toUpperCase()}</strong>
          </div>

          {/* AI Button */}

          <button
            type="button"
            className="find-colors-btn"
            onClick={fetchAIResponse}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="loading-spinner"></span>
                AI Analyzing...
              </>
            ) : (
              "Find Best Colors"
            )}
          </button>
        </div>
      </div>

      {/* ======================================
          ERROR
      ====================================== */}

      {error && (
        <div className="lookbest-error">
          <span>⚠️</span>

          <p>{error}</p>
        </div>
      )}

      {/* ======================================
          AI RESULT
      ====================================== */}

      {recommendedColors.length > 0 && (
        <div className="best-colors-section">
          {/* ==================================
              SECTION HEADER
          ================================== */}

          <div className="section-title">
            <div>
              <h2>Best Colors For You</h2>

              <p>AI recommended colors based on your skin tone</p>
            </div>

            <span className="color-count">
              {recommendedColors.length} Colors
            </span>
          </div>

          {/* ==================================
              COLOR GRID
          ================================== */}

          <div className="color-grid">
            {recommendedColors.map((item, index) => (
              <div className="color-card" key={`${item.hex}-${index}`}>
                {/* Color Circle */}

                <div
                  className="color-circle"
                  style={{
                    backgroundColor: item.hex,
                  }}
                ></div>

                {/* Color Information */}

                <div className="color-info">
                  <span>{item.name}</span>

                  <small>{item.hex.toUpperCase()}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ======================================
          EMPTY STATE
      ====================================== */}

      {!isLoading && recommendedColors.length === 0 && !error && (
        <div className="empty-lookbest">
          <div className="empty-icon">✨</div>

          <h3>Let AI Find Your Colors</h3>

          <p>
            Select your skin color and click
            <strong> Find Best Colors</strong> to get 12 personalized clothing
            colors.
          </p>
        </div>
      )}
    </div>
  );
}
