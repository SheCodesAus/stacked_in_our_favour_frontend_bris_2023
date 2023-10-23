import { useState, useEffect } from "react";
import getEvents from"../api/get-events";

export default function useEvents() {
    // Here we use the useState hook to create a state variable called projectsand a function to update it called setProjects. We initialize the statevariable with an empty array.
    const [events, setEvents] =useState([]);

    // We also create a state variable called isLoading and error to keep track ofthe loading state and any errors that might occur.
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    
    // We use the useEffect hook to fetch the projects from the API and update thestate variables accordingly.
    // This useEffect will only run once, when the component this hook is used inis mounted.
    useEffect(() => {
        getEvents()      
            .then((events) => {
                setEvents(events);
                setIsLoading(false);
            })      
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
        }, []);

        // Finally, we return the state variables and the error. As the state in thishook changes it will update these values and the component using this hookwill re-render.
        
        return { events, isLoading, error };
}
