import { model, Schema, SchemaTypes, Types } from "mongoose";

export interface IProduct extends Document{
  name: String,
  price: Number,
  stock: Number,
  provider: Types.ObjectId
}

const productSchema = new Schema<IProduct>(
    {
        name: {
            type: String,
            require: true
        },
        price: {
            type: Number,
            require: true
        },
        stock: {
            type: Number,
            require: true
        },
        provider: {
            type: Schema.Types.ObjectId,
            ref: "Provider"
        }
    }
)

export default model<IProduct>("Product", productSchema);