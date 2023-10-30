async function postRegister(email, username, password, role, organiserID) {
    const url = `${import.meta.env.VITE_API_URL}/register/`;

    console.log("postRegister called with:", email, username, password, role);

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
                "role": role,
                "organiserID": organiserID
            }),
        });
    } catch (error) {
        console.error("Network error:", error);
        throw new Error("Network error occurred while trying to register.");
    }

    if (!response.ok) {
        const fallbackError = "Error trying to register";

        const data = await response.json().catch(() => {
            console.error("Error parsing JSON response");
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
        console.error("Server response error:", errorMessage);
        throw new Error(errorMessage); 
    }

    const responseData = await response.json();
    console.log("Server response data:", responseData);
    return responseData;
}

export default postRegister;