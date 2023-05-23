import { StatusCodes } from "http-status-codes";
import ProductController from "./ProductController";

const home = (_req: any, res: any) => {
  const products = ProductController.getProducts();
  res.render("general/index", {
    products,
    pageTitle: "Products List",
    path: "general.index",
    formCss: false,
    productCss: true,
  });
};

const notFound = (_req: any, res: any) => {
    res
      .status(StatusCodes.NOT_FOUND)
      .render("404", {
        pageTitle: "Not found",
        path: 'not.found',
        formCss: false,
        productCss: false
      });
  }

const GeneralController = {
  home,
  notFound,
};

export default GeneralController;
