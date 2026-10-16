export const ValidateEmail = (value) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return "Enter a valid email address";
    }
    return "";
};

export const ValidatePassword = (value) => {
    if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(value)) {
        return "Use 8+ characters, uppercase, lowercase, number and special character";
    }
    return "";
};