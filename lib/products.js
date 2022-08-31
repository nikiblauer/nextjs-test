import fs from "fs";
import path from "path";

const productsDirectory = path.join(process.cwd(), "products");

export function getProducts() {
  const fileNames = fs.readdirSync(productsDirectory);

  const productData = fileNames.map((fileName) => {
    const rawdata = fs.readFileSync(path.join(productsDirectory, fileName));

    return JSON.parse(rawdata);
  });

  return productData;
}
