import axios from "axios";

const BASE_URL = "https://api.escuelajs.co/api/v1/products";

const getProducts = async () => {
     const response = await axios.get(`${BASE_URL}/products`);
     return response.data;
}

export { getProducts };