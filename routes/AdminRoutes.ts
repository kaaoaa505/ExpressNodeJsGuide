import express from "express";
import ProductController from "../controllers/ProductController";

const AdminRoutes = express.Router();

AdminRoutes.get("/products/create", ProductController.create);
AdminRoutes.post("/products", ProductController.store);

export default AdminRoutes;
