import { Router, Response } from "express";
import buildCRUD from "../utils/buildCRUD";
import products, { Products } from "../models/products";

const router = Router()
router.get('/hi', (req, res: Response) => {
  res.json({message: "hi"})
})

const productsRouter: Router = buildCRUD<Products>(products);

export default productsRouter;