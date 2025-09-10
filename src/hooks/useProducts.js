import axiosHttp from "@/utils/axioshttp";
import { endPoints } from "@/utils/endpoints";
import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const endPoint = `${endPoints.getProducts}`;
      const result = await axiosHttp.get(endPoint);
      if (result?.status === 200) {
        setProducts(result?.data?.data);
      }
    } catch (err) {}
  };

  useEffect(() => {
    getProducts();
  }, []);
  return products;
};

export default useProducts;
