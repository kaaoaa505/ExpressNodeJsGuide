import ProductModel from "../models/ProductModel";

const create = async (_req: any, res: any) => {
  return await ProductModel.getAllProducts((products: ProductModel[]) => {
    res.render("admin/products/create", {
      products,
      pageTitle: "Create New Product",
      path: "admin.products.create",
      formCss: true,
      productCss: false,
    });
  });
};

const store = async (req: any, res: any) => {
  const { title } = req.body;
  const newProduct = new ProductModel(title);
  await newProduct.save();
  return res.redirect("/");
};

const ProductController = {
  create,
  store,
};

export default ProductController;
