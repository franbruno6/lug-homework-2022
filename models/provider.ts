import { model, Schema } from "mongoose";

const providerSchema = new Schema(
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

export default model("Provider", providerSchema)