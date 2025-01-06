import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true
  },
  shopLink: {
    type: String,
    required: true
  },
  storePhoto: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

// Prevent duplicate model initialization
export default mongoose.models.Item || mongoose.model('Item', ItemSchema);