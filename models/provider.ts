import { model, Schema } from "mongoose";

export interface IProvider extends Document{
    name: String,
    adress: String
}

const providerSchema = new Schema<IProvider>(
    {
        name: {
            type: String,
            require: true
        },
        adress: {
            type: String
        }
    }
)

export default model<IProvider>("Provider", providerSchema)