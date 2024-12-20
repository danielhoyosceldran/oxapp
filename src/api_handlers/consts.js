// This file is executed first
// export const API_URL = "http://192.168.1.7:8081";
import { blankRequest } from "./session";

export const API_URL = "http://localhost:8081";
(async () => {
    const LOGGED_IN = await blankRequest();
    console.log(LOGGED_IN);
  })();