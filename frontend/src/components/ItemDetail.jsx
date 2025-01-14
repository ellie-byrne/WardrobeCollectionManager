import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useToast } from "@/hooks/use-toast"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Separate EditItemDialog component
const EditItemDialog = ({ item, onItemUpdated }) => {
    // Initialize with the current item name instead of the entire item object
    const [formData, setFormData] = useState({
      item: item.item || '', // Initialize with the current item name
      type: item.type || ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);
  
    const handleInputChange = (e) => {
      const { id, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [id]: value
      }));
    };
  
    const handleSubmit = async () => {
      try {
        setIsLoading(true);
        // Send only the updated fields while preserving other fields
        const response = await axios.put(`http://localhost:8080/api/v1/items/${item._id}`, {
          ...item,        // Spread the existing item data to preserve all fields
          item: formData.item,  // Update only the item name
          type: formData.type
        });
        
        if (response.status === 200) {
          onItemUpdated(response.data);
          setOpen(false);
        }
      } catch (error) {
        console.error('Error updating item:', error);
      } finally {
        setIsLoading(false);
      }
    };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Item</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Item</DialogTitle>
          <DialogDescription>
            Make changes to your item here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="item" className="text-right">
              Name
            </Label>
            <Input
              id="item"
              value={formData.item}
              onChange={handleInputChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="type" className="text-right">
              Type
            </Label>
            <Input
              id="type"
              value={formData.type}
              onChange={handleInputChange}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button 
            type="submit" 
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? 'Saving...' : 'Save changes'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

// Main ItemDetail component
const ItemDetail = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const { _id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

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

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      const deleteUrl = `http://localhost:8080/api/v1/delete-items/delete-item/${_id}`;
      await axios.delete(deleteUrl);
      
      toast({
        title: "Success",
        description: "Item deleted successfully",
        variant: "default",
      });
      navigate('/items');
    } catch (error) {
      console.error("Delete error:", error);
      toast({
        title: "Error",
        description: "Failed to delete item. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsDeleting(false);
    }
  };

  const handleItemUpdated = (updatedItem) => {
    setItem(updatedItem);
    toast({
      title: "Success",
      description: "Item updated successfully",
      variant: "default",
    });
  };

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  if (!item) {
    return <div className="p-4">Item not found</div>;
  }

  return (
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
              <p className="text-2xl font-semibold mb-4">{item.type}</p>
              <p className="text-gray-600 mb-6">{item.description}</p>
              <div className="flex gap-4">
                <EditItemDialog 
                  item={item} 
                  onItemUpdated={handleItemUpdated} 
                />
                <Drawer>
                  <DrawerTrigger>
                    <Button variant="destructive">Delete Item</Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                      <DrawerDescription>This action cannot be undone.</DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter className="flex flex-col sm:flex-row gap-2">
                      <Button 
                        variant="destructive" 
                        onClick={handleDelete} 
                        disabled={isDeleting}
                      >
                        {isDeleting ? 'Deleting...' : 'Delete Item'}
                      </Button>
                      <DrawerClose>
                        <Button variant="outline">Cancel</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ItemDetail;