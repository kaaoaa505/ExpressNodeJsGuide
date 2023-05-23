import { log } from "console";

const products: any = [];

const create = (_req: any, res: any) => {
  res.render("admin/products/create", {
    products,
    pageTitle: "Create New Product",
    path: "admin.products.create",
    formCss: true,
    productCss: false,
  });
};

const store = (req: any, res: any) => {
  const { title } = req.body;
  products.push({ title });
  res.redirect("/");
};

const index = (_req: any, res: any) => {
  log(products);
  res.send(products.toString());
};

const getProducts = () => {
    return products;
}

const ProductController = {
  create,
  store,
  index,
  getProducts,
};
 
export default ProductController;