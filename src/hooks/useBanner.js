import axiosHttp from "@/utils/axioshttp";
import { endPoints } from "@/utils/endpoints";
import { useEffect, useState } from "react";

const useBanner = (query) => {
  const [products, setProducts] = useState([]);

  const getBanner = async () => {
    try {
      let endPoint;
      if (query) {
        endPoint = `${endPoints.getBanners}?${query}`;
      } else {
        endPoint = `${endPoints.getBanners}`;
      }
      // const endPoint = `${endPoints.getProducts}`;
      const result = await axiosHttp.get(endPoint);
      if (result?.status === 200) {
        setProducts(result?.data?.data);
      }
    } catch (err) {}
  };

  useEffect(() => {
    getBanner();
  }, []);
  return products;
};

export default useBanner;
