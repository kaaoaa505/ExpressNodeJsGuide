import fs from "fs";
import path from "path";
import PathHelper from "../helpers/PathHelper";

let products: ProductModel[] = [];
const targetPath = path.join(PathHelper.rootDir, "data", "products.json");
const getProductsFromJsonFile = async (cb: Function) => {
    return await fs.readFile(targetPath, (err, dataBuffer) => {
      if (err){
        return cb([]);
      }
      products = dataBuffer.toString() ? JSON.parse(dataBuffer.toString()) : [];
      return cb(products);
    });
};

class ProductModel {
  constructor(private title: string = "") {}

  static async getAllProducts(cb: Function) {
    return getProductsFromJsonFile(cb);
  }

  async save() {
    products.push(this);
    return await fs.writeFile(targetPath, JSON.stringify(products), (err) => {
      if (err) throw err;
    });
  }
}

export default ProductModel;
