import { StatusCodes } from "http-status-codes";
import ProductModel from "../models/ProductModel";

const home = async (_req: any, res: any) => {
  return await ProductModel.getAllProducts((products: ProductModel[]) => {
    res.render("general/index", {
      products,
      pageTitle: "Products List",
      path: "general.index",
      formCss: false,
      productCss: true,
    });
  });
};

const notFound = (_req: any, res: any) => {
  return res.status(StatusCodes.NOT_FOUND).render("404", {
    pageTitle: "Not found",
    path: "not.found",
    formCss: false,
    productCss: false,
  });
};

const GeneralController = {
  home,
  notFound,
};

export default GeneralController;
