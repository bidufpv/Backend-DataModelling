import mongoose, { mongo } from 'mongoose'

const todoSchema = new mongoose.Schema({}, {timestamps: true})

export const Todo = mongoose.model("Todo", todoSchema)