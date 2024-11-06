import axios from "axios";

const NetworkInstance = () => {
  const networkInstance = axios.create({
    baseURL: "", // Set the proxy path here
  });

  return networkInstance;
};

export default NetworkInstance;
