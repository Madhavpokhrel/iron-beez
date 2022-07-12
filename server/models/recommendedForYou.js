import mongoose from "mongoose";

const recommendedForYouSchema = mongoose.Schema({
  rId: {
    type: String,
    required: true
  },
  vin: {
    type: String,
    required: true,
  },
  heading: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  miles: {
    type: Number,
    required: true,
  },
  vdp_url: {
    type: String,
    required: true,
  },
  exterior_color: {
    type: String,
    required: true,
  },
  interior_color: {
    type: String,
    required: true,
  },
  seller_type: {
    type: String,
    required: true,
  },
  inventory_type: {
    type: String,
    required: true,
  },
  stock_no: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  media: {
    photo_links: [],
  },
  dealer: {
    id: Number,
    website: String,
    name: String,
    street: String,
    city: String,
    state: String,
    zip: String
  },
  build: {
    year: Number,
    make: String,
    model: String,
    fuel_type: String,
    engine: String,
  },
});

export default mongoose.model('RecommendedForYou', recommendedForYouSchema);