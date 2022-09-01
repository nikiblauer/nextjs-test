import fs from "fs";
import path from "path";

const productsDirectory = path.join(process.cwd(), "products");

export function getProducts() {
  const fileNames = fs.readdirSync(productsDirectory);

  const productData = fileNames.map((fileName) => {
    const rawdata = fs.readFileSync(path.join(productsDirectory, fileName));
    const data = JSON.parse(rawdata);

    return {
      fileName: fileName.replace(/\.json$/, ""),
      ...data,
    };
  });

  return productData;
}

export function getProduct(id) {
  const fullPath = path.join(productsDirectory, `${id}.json`);
  const rawdata = fs.readFileSync(fullPath);

  const data = JSON.parse(rawdata);

  return {
    id,
    data,
  };
}

export function getAllProductIds() {
  const fileNames = fs.readdirSync(productsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'product1'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'product2'
  //     }
  //   }
  // ]

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.json$/, ""),
      },
    };
  });
}
