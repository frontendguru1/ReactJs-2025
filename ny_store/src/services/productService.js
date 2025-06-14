import { api } from "./apiConfig"
import data from "../data/data.json";

export const getAllProducts = async (params) => await api.get("/products", { params: params });
// export const getAllProducts = async () => await data;

export const getProductDataById = async (id) => {
  const data = await api.get(`/products/${id}`);
  return data;
};

export const getAllCategoriesData = async () => await api.get("/categories");


export const getAllProductByCategory = async (id) => await api.get(`/categories/${id}/products`);




// GET ==> to fetch the data from server
// POST ==> to post the data to the server 
// PUT ==> Update the data (replace the entire data)
// PATCH ==> update the data (Partially)
// DELETE ==> Delete data
