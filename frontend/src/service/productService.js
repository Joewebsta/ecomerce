import axios from "axios";

const API_BASE_URL = 'http://localhost:3000/api/products';

const getProducts = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data
  } catch (error) {
    throw new Error('Failed fetching products');
  }
}

const createProduct = async (newProduct) => {
  try {
    const response = await axios.post(API_BASE_URL, newProduct);
    return response.data;
  } catch (error) {
    throw new Error('Failed to create new product.');
  }
}

const deleteProduct = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/${id}`);
  } catch (error) {
    throw new Error('Failed to delete product.');
  }
}


export default { getProducts, createProduct, deleteProduct }