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

export async function sha256(message) {
    // Converteix el missatge a un ArrayBuffer
    const encoder = new TextEncoder();
    const data = encoder.encode(message);

    // Calcula el hash SHA-256
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);

    // Converteix el hash a una cadena hexadecimal
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    return hashHex;
}