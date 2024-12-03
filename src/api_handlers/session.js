import { API_URL } from "../api_handlers/consts";

export async function logoutRequest() {
    console.log("Hola")
    const response = await fetch(`${API_URL}/signout`, {
        method: "PUT",
        credentials: "include"
    });
    if (response.ok) location.reload();
    // else -> pop up com que no s'ha pogut
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

export async function sendAccessRequest(action, data) {
    const url = `${API_URL}/access/${action}`;
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
    });
    return await response.json();
}