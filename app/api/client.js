import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://127.0.0.1:19002/api",
});

export default apiClient;
