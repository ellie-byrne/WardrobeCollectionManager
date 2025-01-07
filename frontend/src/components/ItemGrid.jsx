// ItemGrid.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";

const ItemGrid = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/items")
      .then((response) => {
        setItems(response.data); // Store the entire item objects, not just photos
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  }, []);

  const handleItemClick = (itemId) => {
    navigate(`/all-items/${itemId}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {items.map((item) => (
        <Card
          key={item._id}
          className="cursor-pointer hover:shadow-lg transition-shadow duration-200"
          onClick={() => handleItemClick(item._id)}
        >
          <CardContent className="p-4">
            <img
              src={item.storePhoto}
              alt={item.name || 'Item photo'}
              className="w-full h-48 object-cover rounded-md mb-2"
            />
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-gray-600">${item.price}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ItemGrid;