import axios from "axios";

const NetworkInstance = () => {
  const networkInstance = axios.create({
    baseURL: "http://web-api/",
  });

  return networkInstance;
};

export default NetworkInstance;
