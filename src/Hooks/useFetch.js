import React from 'react'

const useFetch = () => {

    const [data, setData] = React.useState(null)
    const [erro, setErro] = React.useState(null)
    const [loading, setLoading] = React.useState(false)

    const request = React.useCallback(async (url, options) => {
        let response;
        let json;

        try {
            setErro(null)
            setLoading(true)
            
            response = await fetch(url, options)
            json = await response.json();  
            if(!response.ok) throw new Error (json.message)
        } catch (erro) {
            setErro(erro.message)
            json = null
        } finally {
            setData(json)
            setLoading(false)
            return { response, json }
        }
    }, [])

    return { data, erro, loading, request }
}

export default useFetch
