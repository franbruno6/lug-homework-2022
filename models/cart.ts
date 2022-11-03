import { model, Schema, Types } from "mongoose";
import productDetail from "./product_detail";

export interface ICart extends Document{
    productDetails: [],
    subTotal: Number
}

const cartSchema = new Schema<ICart>(
    {
       productDetails: [
        productDetail
       ],
       subTotal: {
            type: Number,
            default: 0
       }
    },
    {
        timestamps: true
    }
)

export default model<ICart>("Model" , cartSchema)