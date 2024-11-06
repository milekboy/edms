import axios from "axios";

const NetworkInstance = () => {
  const networkInstance = axios.create({
    baseURL: "/api/proxy", // Set the proxy path here
  });

  return networkInstance;
};

export default NetworkInstance;
