async function deleteEventAPI(eventId) {
    const url = `${import.meta.env.VITE_API_URL}/events/${eventId}/`;  // Ensure your endpoint follows this structure
    const token = window.localStorage.getItem("token");  // Assuming you store the auth token in local storage

    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Authorization': `Token ${token}`,
        },
    });

    if (!response.ok) {
        const fallbackError = `Error deleting event with ID ${eventId}`;
        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }

    return true;  // Successfully deleted
}

export default deleteEventAPI;
