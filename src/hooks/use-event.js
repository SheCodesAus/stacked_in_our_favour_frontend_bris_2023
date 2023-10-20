import { useState, useEffect } from"react";
import getEvent from"../api/get-event";

export default function useEvent(eventId) {
    const [event, setEvent] =useState(); 
    const [isLoading, setIsLoading] =useState(true);
    const [error, setError] =useState();
    
    useEffect(() => {
        // Here we pass the projectId to the getProject function.
        getEvent(eventId)      
            .then((event) =>{
                setEvent(event);
                setIsLoading(false);
            })
            .catch((error) => { 
                setError(error);
                setIsLoading(false);
            });
            
        // This time we pass the projectId to the dependency array so that the hookwill re-run if the projectId changes.
    }, [eventId]);
    
    return { event, isLoading, error };
}