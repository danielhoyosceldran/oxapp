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
    try{
        const response = await fetch(API_URL + "/", {
            method: "GET",
            credentials: "include"
        });
        const responseData = await response.json();
        return responseData["status"];
    }
    catch {
        return false;
    }
}