import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
  orderPrice:{
    type: Number,
    required: true,
  }
}, {timestamps: true});

export const Order = mongoose.model("Order", orderSchema)