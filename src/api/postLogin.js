async function postLogin(username, password) {
    const url = `${import.meta.env.VITE_API_URL}/login/`;
    
    let response;
    try {
        response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "username": username,
                "password": password,
            }),
        });
    } catch (error) {
        throw new Error("Network error occurred while trying to login.");
    }

    if (!response.ok) {
        const fallbackError = "Error trying to login";

        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });

<<<<<<< HEAD
        if (data.detail === "Invalid login credentials") {
            throw new Error("Invalid login credentials");
        } else if (data.detail === "User not found") {
            throw new Error("Are you sure you have registered?");
        } else {
            throw new Error(fallbackError);
        }    }
=======
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }
>>>>>>> 98a2bcb69a6f14b2fc5f2fddc115b8ce68da67f0

    return await response.json();
}

export default postLogin;
