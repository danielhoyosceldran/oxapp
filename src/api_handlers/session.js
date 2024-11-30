import { API_URL } from "../api_handlers/consts";

export async function logoutRequest() {
    console.log("Hola")
    const response = await fetch(`${API_URL}/access/signout`, {
        method: "PUT",
        credentials: "include"
    });
    if (response.ok) location.reload();
}

export async function accessRequest() {
    try{
        const response = await fetch(API_URL + "/access", {
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