export function copyToclipboard(text) {
    navigator.clipboard.writeText(text)
            .then(() => {
                alert(`Copied to clipboard: ${text}`);
            })
            .catch((err) => console.error("Failed to copy: ", err));
}


export function getCookieValue(cookieName) {
    const cookies = document.cookie.split("; "); // Divideix les cookies en un array
    for (let cookie of cookies) {
        const [name, value] = cookie.split("="); // Divideix cada cookie en nom i valor
        if (name === cookieName) {
            return decodeURIComponent(value); // Retorna el valor de la cookie si coincideix
        }
    }
    return null; // Retorna null si no es troba la cookie
}