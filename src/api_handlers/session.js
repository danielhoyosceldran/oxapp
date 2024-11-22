import { API_URL } from "../api_handlers/consts";

export function logout() {
    fetch(`${API_URL}/signout`, {
        method: "PUT",
        credentials: "include"
    });
    location.reload()
}