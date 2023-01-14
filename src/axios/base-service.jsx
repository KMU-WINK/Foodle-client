import axios from "axios";

const baseURL = new URL("https://api.kmu-wink.com/");

const autoCompleteURL = new URL("https://server.kmu-wink.com/");

export const baseService = axios.create({
  baseURL: baseURL.toString(),
  "Content-Type": "application/json",
});

export const autoCompleteService = axios.create({
  baseURL: autoCompleteURL.toString(),
  "Content-Type": "application/json",
});

export default baseService;
