import axios from "axios";

const NetworkInstance = () => {
  const networkInstance = axios.create({
    baseURL: "http://196.200.119.186/",
  });

  return networkInstance;
};

export default NetworkInstance;
