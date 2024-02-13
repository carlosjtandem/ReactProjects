//se recomienda que el nombre del archivo sea useXXX ya q es un custom hook
import { useState, useEffect } from 'react'
export function useFetch(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [controller, setController] = useState(null)

    useEffect(() => {
        const abortController = new AbortController();
        setController(abortController);
        setLoading(true);

        fetch(url, { signal: abortController.signal })
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => {
                if (error.name === "AbortError") {
                    console.log("Request cancelled");
                } else {
                    setError(error)
                }
            }
            )
            .finally(() => { setLoading(false), console.log('cambia a false el loading') }) // esto se eejecuta cuando se hayan terminado todas las promesas

        return () => abortController.abort();  // esto se va a ejecutar cuando el componente sea desmontado, es decir cuando ya no es visible .. ejj cuando cambio de ruta
    }, [])

    const handleCancelRequest = () => {
        if (controller) {
            controller.abort();
            setError('Request cancelled:')
        }
    }

    return { data, loading, error, handleCancelRequest };
}

