import { model, Schema, SchemaType, SchemaTypes, Types } from "mongoose";

export interface IProductDetail extends Document{
    productName: Types.ObjectId,
    quantity: Number,
    price: Number
}

const productDetailSchema = new Schema(
    {
        product: {
            type: SchemaTypes.ObjectId,
            ref: "Product"
        },
        quantity: {
            type: Number,
            require: true
        },
        price: {
            type: Number,
            require: true
        }
    }
)

export default model("Product Detail", productDetailSchema)