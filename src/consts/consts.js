// This file is executed first
export const API_URL = "http://localhost:8081";

const response = await fetch(API_URL + "/", {
    method: "GET",
    credentials: "include"
});
const responseData = await response.json();

export const LOGGED_IN = responseData["status"];