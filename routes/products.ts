import { Router, Response } from "express";

const router = Router();

router.get('/', (req, res: Response) => {
  res.json({message: "hi"})
})

export default router