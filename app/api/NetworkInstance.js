import axios from "axios";

const NetworkInstance = () => {
  const networkInstance = axios.create({
    baseURL: "//196.200.119.186:8070/",
    // baseURL: "http://web-api/",
  });

  return networkInstance;
};

export default NetworkInstance;
