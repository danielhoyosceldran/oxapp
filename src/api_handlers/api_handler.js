import { API_URL } from "./consts";

export async function apiRequest({endpoint, options = {}}) {
    try {
        console.log("try 1");
        const defaultOptions = {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        };
        
        const finalOptions = { ...defaultOptions, ...options };
        
        const response = await fetch(API_URL + endpoint, finalOptions);
        console.log(response);
        
        if (response.status === 401) {
            console.log("try 2");
            const refreshToken = localStorage.getItem("refreshToken");
            if (refreshToken) {
                // Afegeix el refresh token al header
                const refreshTokenRequest = await fetch(API_URL + "/", {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        Authorization: `Bearer ${refreshToken}`
                    }
                })
                if (refreshTokenRequest.ok) {
                    console.log("try 3");

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
