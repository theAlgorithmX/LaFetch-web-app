import axiosHttp from "@/utils/axioshttp";
import { endPoints } from "@/utils/endpoints";
import { useEffect, useState } from "react";

const useBlog = () => {
  const [blogs, setBlogs] = useState([]);

  const getBlog = async () => {
    try {
      const endPoint = `${endPoints.getBlogs}`;
      const result = await axiosHttp.get(endPoint);
      if (result?.status === 200) {
        setBlogs(result?.data?.data);
      }
    } catch (err) {}
  };

  useEffect(() => {
    getBlog();
  }, []);
  return blogs;
};

export default useBlog;
