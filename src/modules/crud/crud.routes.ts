import { Router } from "express";
import crudControllers from "./crud.controllers";

const router = Router();

const corsConfig = {
  origin: ["http://localhost:3000"],
};

router.get(`/get-all`, crudControllers.getAllProducts);
router.post(`/create`, crudControllers.createProduct);
router.put(`/:id`, crudControllers.updateProduct);
router.delete(`/:id`, crudControllers.deleteProduct);
router.get(`/:id`, crudControllers.getOneProductById);
export default router;
