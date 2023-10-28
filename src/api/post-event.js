// post-event.js
async function postEvent(eventData) {
    const url = `${import.meta.env.VITE_API_URL}/events/`;
    const token = window.localStorage.getItem("token");
    
    if (!token) {
        throw new Error("No token found in local storage");
    }

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`,
        },
        body: JSON.stringify(eventData),  // Send the entire object
    });

    if (!response.ok) {
        const fallbackError = "Error trying to post event";
        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }

    return await response.json();
}

export default postEvent;