import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import axios from 'axios';

interface FormData {
  itemName: string;
  shopLink: string;
  imageLink: string;
}

const ItemSubmissionForm = () => {
  const [formData, setFormData] = useState<FormData>({
    itemName: '',
    shopLink: '',
    imageLink: ''
  });

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // try {
  //   const response = await axois.post('http://localhost:8080/api/v1/add-items', formData);
  // }
  // catch (error) {
  //   console.error("waht the sigma", error);
  // }

  const data = {
      itemId: 123,
      item: formData.itemName,
      dateAdded: "today",
      shopLink: formData.shopLink,
      storePhoto: formData.imageLink
  };
  
  axios.post('http://localhost:8080/api/v1/add-items', data, {
      headers: {
          'Content-Type': 'application/json'
      }
  })
  .then(response => {
      console.log('Item added:', response.data);
  })
  .catch(error => {
      console.error('There was an error adding the item:', error);
  });
  

  
  // console.log('Form data:', formData);
  // try {
  //   const response = await fetch('localhost:8080/api/v1/add-items', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(formData),
  //   });

  //   if (response.ok) {
  //     // Reset form after successful submission
  //     setFormData({
  //       itemName: '',
  //       shopLink: '',
  //       imageLink: ''
  //     });
  //     // You can add a success message here
  //   }
  // } catch (error) {
  //   console.error('Error submitting form:', error);
  //   // You can add error handling here
  // }
};

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
};

return (
  <Card className="w-full max-w-lg mx-auto">
    <CardHeader>
      <CardTitle>Add New Item</CardTitle>
      <CardDescription>
        Enter the details of the item you want to add to the collection.
      </CardDescription>
    </CardHeader>
    <form onSubmit={handleSubmit}>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="itemName">Item Name</Label>
          <Input
            id="itemName"
            name="itemName"
            placeholder="Enter item name"
            value={formData.itemName}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="shopLink">Shop Link</Label>
          <Input
            id="shopLink"
            name="shopLink"
            type="url"
            placeholder="https://example.com/shop/item"
            value={formData.shopLink}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="imageLink">Image Link</Label>
          <Input
            id="imageLink"
            name="imageLink"
            type="url"
            placeholder="https://example.com/images/item.jpg"
            value={formData.imageLink}
            onChange={handleChange}
            required
          />
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-end space-x-2">
        <Button 
          type="button" 
          variant="outline"
          onClick={() => setFormData({
            itemName: '',
            shopLink: '',
            imageLink: ''
          })}
        >
          Clear
        </Button>
        <Button type="submit">Submit</Button>
      </CardFooter>
    </form>
  </Card>
);
};

export default ItemSubmissionForm;