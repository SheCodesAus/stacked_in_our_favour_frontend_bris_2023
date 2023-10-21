async function postEvent(title, description, image) {
    // is this getting the right date?
    // let date = new Date().toJSON();
    const url = `${import.meta.env.VITE_API_URL}/events/`;
    const token = window.localStorage.getItem("token");
    // console.log("i am post event")

    const response = await fetch(url, {
        method: "POST", // We neeed to tell the server that we are sending JSON data so we set the COntent Type header to application/json
        headers: {
            "Content-Type": "application/json",
            // authentication/authorization
            "Authorization": `Token ${token}`,
        },
        body: JSON.stringify({
            "title": title,
            "description": description,
            "image": image,
            // user does not control - we define directly here and send straight to backend
            "isOpen": true,
            // user does not control
            // "dateCreated": date,
        }),
    });

    if (!response.ok) { // error handling
        const fallbackError = `Error trying to post event`;

        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });
        
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }

    return await response.json();
}

export default postEvent;