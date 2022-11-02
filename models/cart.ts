import { model, Schema, Types } from "mongoose";

export interface ICart extends Document{
    productDetails: Types.ObjectId[]
}

const cartSchema = new Schema<ICart>(
    {
       productDetails: [
        {
            type: Schema.Types.ObjectId,
            ref: "Product_Detail"
        }
       ] 
    }
)

export default model<ICart>("Model" , cartSchema)