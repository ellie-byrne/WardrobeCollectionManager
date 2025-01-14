import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const ItemsList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
    
  const handleItemClick = (_id) => {
    console.log("Using itemId for navigation:", _id);
    navigate(`/all-items/${_id}`);  // Use itemId instead of _id
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/api/v1/items/type/bottoms');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <Card key={item._id} className="cursor-pointer hover:shadow-lg transition-shadow duration-200"
            onClick={() => handleItemClick(item._id)}>
              <CardContent className="p-4">
                <img
                  src={item.storePhoto}
                  alt={item.item}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{item.item}</h3>
                <p className="text-gray-600 mb-2">Type: {item.type}</p>
                <p className="text-lg font-bold">${item.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemsList;