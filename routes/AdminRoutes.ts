import { log } from "console";
import express from "express";
import path from "path";

import PathHelper from "../helpers/PathHelper";

const AdminRoutes = express.Router();

export let products: any = [];

AdminRoutes.get("/products/create", (_req, res) => {
  res.render('admin/products/create', {
    products,
    pageTitle: 'Create New Product',
    path: 'admin.products.create',
    formCss: true,
    productCss: false
  });
});

AdminRoutes.post("/products", (req, res) => {
  const { title } = req.body;
  products.push({title});
  res.redirect("/");
});

AdminRoutes.get("/products", (_req, res) => {
  log(products);
  res.send(products.toString());
});

export default AdminRoutes;
