import { Router } from "express";
import crudRoutes from "../modules/crud/crud.routes";

const router = Router();

router.use(`/crud`, crudRoutes);

export default router;

// http://localhost:5000/api/v1/crud/get-all
// http://localhost:5000/api/v1/crud/create
// http://localhost:5000/api/v1/crud/:id
// http://localhost:5000/api/v1/crud/:id

