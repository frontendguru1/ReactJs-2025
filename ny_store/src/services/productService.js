import { api } from "./apiConfig"

export const getAllProducts = (params) => api.get("/products", { params: params });

export const getAllCategoriesData = () => api.get("/categories");


export const getAllProductByCategory = (id) => api.get(`/categories/${id}/products`);




// GET ==> to fetch the data from server
// POST ==> to post the data to the server 
// PUT ==> Update the data (replace the entire data)
// PATCH ==> update the data (Partially)
// DELETE ==> Delete data
