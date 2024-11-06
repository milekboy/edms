import axios from "axios";

const NetworkInstance = () => {
  const networkInstance = axios.create({
    baseURL: "/api/proxy", // Update baseURL to the Vercel proxy API route
  });

  return networkInstance;
};

export default NetworkInstance;
