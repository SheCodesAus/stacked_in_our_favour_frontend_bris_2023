async function postSticky(noteText, anonymous, eventId, authorID) {
    if (!noteText || !authorID) {
        console.log("noteText and authorID must be non-empty and non-null");
        return;
    }
    // is this getting the right date?
    // let date = new Date().toJSON();
    const url = `${import.meta.env.VITE_API_URL}/sticky-notes/`;
    const token = window.localStorage.getItem("token");

    // Log the data that will be sent to the backend
    console.log("Data being sent:", {
        noteText,
        anonymous,
        eventId,
        authorID
    });

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`,
        },
        body: JSON.stringify({
            "noteText": noteText,
            "authorID": authorID,
            "anonymous": anonymous,
            "eventId": eventId
        }),
    });

    // Log the status and status text of the response
    console.log("Response:", response.status, response.statusText);

    if (!response.ok) {
        const fallbackError = `Error trying to post sticky`;

        // Attempt to get error details from the response
        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });

        const errorMessage = data?.detail ?? fallbackError;
        console.log("Error details:", errorMessage);  // Log the error details
        throw new Error(errorMessage);
    }

    const responseData = await response.json();

    // Log the response data from the server
    console.log("Response data:", responseData);

    return responseData;
}

export default postSticky;