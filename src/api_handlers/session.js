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

export async function blankRequest() {
    try{
        const result = await apiRequest("/");
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

export async function apiRequest(endpoint, options = {}) {
    try {
        const defaultOptions = {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        };
        
        const finalOptions = { ...defaultOptions, ...options };
        
        const response = await fetch(API_URL + endpoint, finalOptions);
        
        if (response.status === 401) {
            const refreshToken = localStorage.getItem("refreshToken");
            console.log("holaa")
            if (refreshToken) {
                // Afegeix el refresh token al header
                console.log(refreshToken);
                const refreshTokenRequest = await fetch(API_URL + "/", {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        Authorization: `Bearer ${refreshToken}`
                    }
                })
                console.log("hee");
                if (refreshTokenRequest.ok) {
                    const retryOptions = {
                        ...finalOptions,
                        headers: {
                            ...finalOptions.headers
                        },
                    };
    
                    const retryResponse = await fetch(API_URL + endpoint, retryOptions);
    
                    if (retryResponse.ok) {
                        return await retryResponse.json();
                    }
                }
            }
            throw new Error("Unauthorized and no valid refresh token found");
        }

        if (response.ok) {
            return await response.json();
        }

        throw new Error(`Request failed with status: ${response.status}`);
    } catch (error) {
        console.error("API Request Error:", error);
        return null; // Opcional: retorna `null` o llança l'error segons el cas d'ús
    }
}
