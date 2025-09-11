import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    image: {
      type: String, // yahan pe image ka URL store hoga (frontend se upload/link send karoge)
      default: ""
    }
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
