import { log } from "console";
import express from "express";
import path from "path";

import PathHelper from "../helpers/PathHelper";

const AdminRoutes = express.Router();

export let products: any = [];

AdminRoutes.get("/products/create", (_req, res) => {
  res.sendFile(
    path.join(PathHelper.rootDir, "views", "admin", "product", "create.html")
  );
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
