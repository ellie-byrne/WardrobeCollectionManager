import mongoose from 'mongoose';

declare global {
  var mongoose: {
    conn: typeof mongoose | null; // The Mongoose instance
    promise: Promise<typeof mongoose> | null; // Promise resolving to Mongoose instance
  };
}
