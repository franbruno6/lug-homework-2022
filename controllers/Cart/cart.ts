import { Request, Response } from "express";
import cartModel from "../../models/cart"
import productModel from "../../models/product";
import prodductDetailModel from "../../models/product_detail"

export const cartController = {
    //Muestra el carrito
    get: async (req:Request, res:Response) => {
        try {
            const productList = await cartModel.find()
            res.status(200).send(productList)
        } catch (error) {
            res.status(500).send(error)
        }
    },

    //Agrega productos de a una cantidad
    add:async (req:Request, res:Response) => {
        try {
            const addProduct = await prodductDetailModel.findOne({... req.params})
            
            if(addProduct?.product != undefined){
                res.status(200).send(addProduct)
            }
            else{
                
            }
        } catch (error) {
            
        }



        /* tengo que buscar en la productlist si esta.
        si no esta buscar en products.
        Si no esta, dar error*/
    },

    //Elimina productos de a una cantidad
    delete:async (req:Request, res:Response) => {
        
    }
}