import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/ItemGrid.css";

const ItemGrid = () => {
    const [wardrobejson, setWardrobejson] = useState([]);

  useEffect(() => {
    // Fetch items from the backend
    axios
      .get("http://localhost:8080/api/v1/items")
      .then((response) => {
        const links = response.data.map((item) => item.storePhoto);
        setWardrobejson(links);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  }, []);

  const handleItemClick = (_id) => {
    navigate(`/item/${_id}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {wardrobejson.map((link, index) => (
        <Card 
        key={_id}
        className="cursor-pointer hover:shadow-lg transition-shadow duration-200"
        onClick={() => handleItemClick(_id)}
        >
      <CardContent className="p-4">
            <img
              src={link}
              alt="item"
              key={index}
              className="w-full h-48 object-cover rounded-md mb-2"
            />
            <h3 className="font-semibold text-lg">{item}</h3>
            <p className="text-gray-600">${item}</p>
          </CardContent>
        </Card>
      ))}
    </div>

    /* // <Link to={"/all-items/${itemId}"} key={itemId}>
            // <img src={link} alt="item" key={index} />
        // </Link> */

    // <div className="grid">
    //   {items.map((item) => (
    //     <div className="item" key={item.id}>
    //       <h3>{item.name}</h3>
    //       <p>{item.description}</p>
    //       {item.imageUrl && <img src={item.imageUrl} alt={item.name} />}
    //     </div>
    //   ))}
    // </div>
  );
};

export default ItemGrid;
