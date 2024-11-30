// This file is executed first
// export const API_URL = "http://192.168.1.7:8081";
import { accessRequest } from "./session";

export const API_URL = "http://localhost:8081";
export const LOGGED_IN = await accessRequest();
console.log(LOGGED_IN);