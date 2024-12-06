export function copyToclipboard(text) {
    navigator.clipboard.writeText(text)
            .then(() => {
                console.log(`Copied: ${text}`);
                alert(`Copied to clipboard: ${text}`);
            })
            .catch((err) => console.error("Failed to copy: ", err));
}
