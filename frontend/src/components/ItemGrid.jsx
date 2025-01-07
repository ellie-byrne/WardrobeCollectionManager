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
        console.log("All items from database:", response.data);
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  }, []);

  const handleItemClick = (item) => {
    console.log("Using itemId for navigation:", item._id);
    // navigate(`/all-items/${itaem._id}`);  // Use itemId instead of _id
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {items.map((item) => (
        <Card
          key={item._id}  // Use itemId as key
          className="cursor-pointer hover:shadow-lg transition-shadow duration-200"
          onClick={() => handleItemClick(item._id)}
        >
          <CardContent className="p-4">
            <img
              src={item.storePhoto}
              alt={item || 'Item photo'}
              className="w-full h-48 object-cover rounded-md mb-2"
            />
            <h3 className="font-semibold text-lg">{item.item}</h3>
            <p className="text-gray-600">${item.item}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ItemGrid;