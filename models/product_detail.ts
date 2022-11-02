import { model, Schema, SchemaType, SchemaTypes, Types } from "mongoose";

export interface IProductDetail extends Document{
    product: Types.ObjectId,
    quantity: Number,
    price: Number
}

const productDetailSchema = new Schema<IProductDetail>(
    {
        product: {
            type: Schema.Types.ObjectId,
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

export default model<IProductDetail>("Product Detail", productDetailSchema)