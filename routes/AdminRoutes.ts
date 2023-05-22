import { log } from "console";
import express from "express";
import path from "path";

import PathHelper from "../helpers/PathHelper";

const AdminRoutes = express.Router();

AdminRoutes.get("/products/create", (_req, res) => {
  res.sendFile(
    path.join(PathHelper.rootDir, "views", "admin", "product", "create.html")
  );
});

AdminRoutes.post("/products", (req, res) => {
  log(req.body);
  const { title } = req.body;
  log(title);
  res.redirect("/");
});

export default AdminRoutes;
