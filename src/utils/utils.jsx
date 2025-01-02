export function copyToclipboard(text) {
    navigator.clipboard.writeText(text)
            .then(() => {
                alert(`Copied to clipboard: ${text}`);
            })
            .catch((err) => console.error("Failed to copy: ", err));
}
