export function changeTheme() {
    document.getElementById("body").classList.toggle("darkMode");
}

export function isDarkThemeOn() {
    var body = document.getElementById("body");
    return body.classList.contains("darkMode")
}