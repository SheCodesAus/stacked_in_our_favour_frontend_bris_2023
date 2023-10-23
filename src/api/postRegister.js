async function postRegister(email, username, password) {
    const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
    const url = `${baseUrl}/register/`;  // Assuming '/register/' is your registration endpoint in Django

    let response;
    try {
        response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "email": email,
                "username": username,
                "password": password,
            }),
        });
    } catch (error) {
        throw new Error("Network error occurred while trying to register.");
    }

    if (!response.ok) {
        const fallbackError = "Error trying to register";

        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });

        const errorMessages = {
            emailError: data?.email,
            usernameError: data?.username,
            passwordError: data?.password,
            detailError: data?.detail,
        };

        for (let error in errorMessages) {
            if (!errorMessages[error]) {
                delete errorMessages[error];
            }
        }

        const errorMessageArray = Object.values(errorMessages);
        const errorMessage = errorMessageArray.join(", ") || fallbackError;
        throw new Error(errorMessage); 
    }

    return await response.json();
}

export default postRegister;
