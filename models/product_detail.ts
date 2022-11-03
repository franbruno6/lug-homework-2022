import { model, Schema, SchemaType, SchemaTypes, Types } from "mongoose";

export interface IProductDetail extends Document{
    product: Types.ObjectId,
    quantity: Number,
    price: Number,
    total: Number
}

const productDetailSchema = new Schema<IProductDetail>(
    {
        product: {
            type: Schema.Types.ObjectId,
            ref: "Product"
        },
        quantity: {
            type: Number,
            require: true,
            min: [1, 'Quantity can not be less than 1.']
        },
        price: {
            type: Number,
            require: true
        },
        total: {
            type: Number,
            require: true
        }
    },
    {
        timestamps: true
    }
)

export default model<IProductDetail>("Product Detail", productDetailSchema)