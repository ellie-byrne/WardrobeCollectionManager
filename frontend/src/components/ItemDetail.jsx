import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const ItemDetail = () => {
  const [item, setItem] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const { _id } = useParams();

  React.useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`/api/items/${_id}`);
        setItem(response.data);
      } catch (error) {
        console.error('Error fetching item:', error);
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
    <div className="max-w-4xl mx-auto p-4">
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img
                src={storePhoto}
                alt="item"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-4">{item}</h1>
              <p className="text-2xl font-semibold mb-4">${item}</p>
              <p className="text-gray-600 mb-6">{item}</p>
              {/* Add additional item details here */}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ItemDetail;