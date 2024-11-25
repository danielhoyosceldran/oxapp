import { API_URL } from "../api_handlers/consts";

export async function logoutRequest() {
    console.log("Hola")
    const response = await fetch(`${API_URL}/signout`, {
        method: "PUT",
        credentials: "include"
    });
    if (response.ok) location.reload();
}

export async function accessRequest() {
    const response = await fetch(API_URL + "/im_i_logged_in", {
        method: "GET",
        credentials: "include"
    });
    const responseData = await response.json();
    return responseData["status"];
}