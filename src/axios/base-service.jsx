import axios from "axios";

const baseURL = new URL("http://15.164.0.82:8000/");

const autoCompleteURL = new URL("http://43.200.252.58:8080");

export const baseService = axios.create({
  baseURL: baseURL.toString(),
  "Content-Type": "application/json",
});

export const AutoCompleteService = axios.create({
  baseURL: autoCompleteURL.toString(),
  "Content-Type": "application/json",
});

export default baseService;
