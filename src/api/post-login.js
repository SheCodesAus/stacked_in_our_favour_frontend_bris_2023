async function postLogin(username, password) {
    // is this getting the right date?
    // let date = new Date().toJSON();
    const url = `${import.meta.env.VITE_API_URL}/login/`;
    // const token = window.localStorage.getItem("token")

    const response = await fetch(url, {
        method: "POST", // We neeed to tell the server that we are sending JSON data so we set the COntent Type header to application/json
        headers: {
            "Content-Type": "application/json",
            // authentication/authorization
            // "Authorization": `Token ${token}`,
        },
        body: JSON.stringify({
            "username": username,
            "password": password,
        }),
    });

    if (!response.ok) { // error handling
        const fallbackError = `Error trying to login`;
        console.log(fallbackError)

        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });
        
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }

    return await response.json();
}

export default postLogin;