import axios from "axios";

export default axios.create({
  baseURL: "https://www.discernliving.com/",
  responseType: "json"
});