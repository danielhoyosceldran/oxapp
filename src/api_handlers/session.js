import { API_URL } from "../api_handlers/consts";
import { apiRequest } from "./api_handler";

export async function logoutRequest() {
    console.log("Hola")
    const response = await fetch(`${API_URL}/signout`, {
        method: "PUT",
        credentials: "include"
    });
    if (response.ok) location.reload();
    // else -> pop up com que no s'ha pogut
}

export async function blankRequest() {
    try{
        const result = await apiRequest({endpoint: "/"});
        if (result) {
            return result.status;
        }
        return false;
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
    return response;
}