import { API_URL } from "../utils/consts";

export function logout() {
    fetch(`${API_URL}/signout`, {
        method: "PUT",
        credentials: "include"
    });
    location.reload()
}