import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/ItemGrid.css";

const ItemGrid = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch items from the backend
    axios
      .get("http://localhost:8080/api/v1/items") // Update with your backend URL if needed
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  }, []);

  return (
    <div className="grid">
      {items.map((item) => (
        <div className="item" key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          {item.imageUrl && <img src={item.imageUrl} alt={item.name} />}
        </div>
      ))}
    </div>
  );
};

export default ItemGrid;
