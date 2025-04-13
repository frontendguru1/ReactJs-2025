import { api } from "./apiConfig"

export const productService = () => api.get("/products");

// GET ==> to fetch the data from server
// POST ==> to post the data to the server 
// PUT ==> Update the data (replace the entire data)
// PATCH ==> update the data (Partially)
// DELETE ==> Delete data
