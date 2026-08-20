// Wardrobe.jsx
import React, { useState, useEffect } from "react";
import "./Wardrobe.css"; 

export default function SavedOutfits() {
  const [outfits, setOutfits] = useState([]);
  const [loading, setLoading] = useState(true);

  // Update (Edit) के लिए नए States
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ shirt: "", pant: "", bottom: "", skin: "" });

  useEffect(() => {
    fetchOutfits();
  }, []);

  const fetchOutfits = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:8080/outfits", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token 
        }
      });
      const data = await response.json();
      
      if (response.ok) {
        setOutfits(data.outfits || []);
      } else {
        setOutfits([]);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching outfits:", error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:8080/outfits/${id}`, {
        method: "DELETE",
        headers: { "Authorization": token }
      });
      
      if (response.ok) {
        setOutfits(outfits.filter((outfit) => outfit._id !== id));
      }
    } catch (error) {
      console.error("Error deleting outfit:", error);
    }
  };

  // 1. Edit मोड ऑन करना (पुराने कलर्स को फॉर्म में भरना)
  const startEditing = (outfit) => {
    setEditingId(outfit._id);
    setEditForm({ 
      shirt: outfit.shirt, 
      pant: outfit.pant, 
      bottom: outfit.bottom, 
      skin: outfit.skin 
    });
  };

  // 2. जब यूजर नया कलर चुने, तो उसे State में सेव करना
  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  // 3. अपडेटेड डेटा बैकएंड पर भेजना
  const handleUpdate = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:8080/outfits/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token // अपडेट करते वक़्त भी टोकन भेजना है
        },
        body: JSON.stringify(editForm),
      });

      if (response.ok) {
        const data = await response.json();
        // UI में पुरानी लिस्ट को नए डेटा से रिप्लेस करो
        setOutfits(outfits.map((o) => (o._id === id ? data.outfit : o)));
        setEditingId(null); // Edit मोड बंद कर दो
      }
    } catch (error) {
      console.error("Error updating outfit:", error);
    }
  };

  if (loading) {
    return <h2>Loading Wardrobe...</h2>;
  }

  return (
    <div className="wardrobe-container">
      <h1 className="wardrobe-header">SavedOutfits 👕👖</h1>
      
      {outfits.length === 0 ? (
        <p className="empty-message">अभी तक कोई लुक सेव नहीं किया है!</p>
      ) : (
        <div className="outfits-grid">
          
          {outfits.map((outfit) => (
            <div key={outfit._id} className="outfit-card">
              
              {/* अगर यह कार्ड एडिट मोड में है तो फॉर्म दिखाओ, वरना नॉर्मल कलर्स दिखाओ */}
              {editingId === outfit._id ? (
                <>
                  <h4 className="edit-title">Edit Look</h4>
                  
                  <div className="color-row">
                    <span>Shirt:</span>
                    <input type="color" name="shirt" value={editForm.shirt} onChange={handleEditChange} />
                  </div>
                  <div className="color-row">
                    <span>Pant:</span>
                    <input type="color" name="pant" value={editForm.pant} onChange={handleEditChange} />
                  </div>
                  <div className="color-row">
                    <span>Shoes:</span>
                    <input type="color" name="bottom" value={editForm.bottom} onChange={handleEditChange} />
                  </div>
                  <div className="color-row">
                    <span>Skin:</span>
                    <input type="color" name="skin" value={editForm.skin} onChange={handleEditChange} />
                  </div>

                  <div className="action-buttons-col">
                    <button onClick={() => handleUpdate(outfit._id)} className="save-edit-btn">Save ✔️</button>
                    <button onClick={() => setEditingId(null)} className="cancel-btn">Cancel ❌</button>
                  </div>
                </>
              ) : (
                <>
                  <h4>Saved Look</h4>
                  
                  <div className="color-row">
                    <span>Shirt:</span>
                    <div className="color-box" style={{ backgroundColor: outfit.shirt }}></div>
                  </div>
                  <div className="color-row">
                    <span>Pant:</span>
                    <div className="color-box" style={{ backgroundColor: outfit.pant }}></div>
                  </div>
                  <div className="color-row">
                    <span>Shoes:</span>
                    <div className="color-box" style={{ backgroundColor: outfit.bottom }}></div>
                  </div>
                  <div className="color-row">
                    <span>Skin:</span>
                    <div className="color-box" style={{ backgroundColor: outfit.skin }}></div>
                  </div>

                  {/* यहाँ हमने Edit और Delete के बटन एक साथ लगाए हैं */}
                  <div className="action-buttons-row">
                    <button onClick={() => startEditing(outfit)} className="edit-btn">Edit ✏️</button>
                    <button onClick={() => handleDelete(outfit._id)} className="delete-btn-half">Delete 🗑️</button>
                  </div>
                </>
              )}

            </div>
          ))}

        </div>
      )}
    </div>
  );
}