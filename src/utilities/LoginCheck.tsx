export function isUsernameValid(username: string): boolean {
    // Add your username validation logic here
    return /^[a-zA-Z0-9]+$/.test(username);
}

export function isPasswordValid(password: string): boolean {
    // Add your password validation logic here
    return password.length >= 8;
}
