// ItemDetail.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  

const ItemDetail = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { _id } = useParams();  // This will get the itemId from the URL

  useEffect(() => {
    const fetchItem = async () => {
      try {
        console.log("Fetching item with ID:", _id);
        const response = await axios.get(`http://localhost:8080/api/v1/items/${_id}`);
        console.log("Received item data:", response.data);
        setItem(response.data);
      } catch (error) {
        console.error("Error fetching item:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [_id]);

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  if (!item) {
    return <div className="p-4">Item not found</div>;
  }

  return (
    <>
    <div className="max-w-4xl mx-auto p-4">
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img
                src={item.storePhoto}
                alt={item.item || 'Item photo'}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-4">{item.item}</h1>
              <p className="text-2xl font-semibold mb-4">${item.item}</p>
              <p className="text-gray-600 mb-6">{item.description}</p>
              
                <Drawer>
                <DrawerTrigger><Button variant="destructive">Delete Item</Button></DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                    <DrawerDescription>This action cannot be undone.</DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
                </Drawer>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
    <>
        {/* <Drawer>
            <DrawerTrigger>Open</DrawerTrigger>
            <DrawerContent>
            <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>This action cannot be undone.</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose>
                <Button variant="outline">Cancel</Button>
                </DrawerClose>
            </DrawerFooter>
            </DrawerContent>
        </Drawer> */}
    </>
    </>
  );
};

export default ItemDetail;