import express from "express";
import path from "path";

import PathHelper from "../helpers/PathHelper";
import {products} from "./AdminRoutes";

const GeneralRoutes = express.Router();

GeneralRoutes.get("/", (_req, res) => {
  res.render('general/index', {
    products,
    pageTitle: 'Products List',
    path: 'general.index',
    formCss: false,
    productCss: true
  });
});

export default GeneralRoutes;
