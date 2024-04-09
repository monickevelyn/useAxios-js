import react, { useEffect, useState } from "react";

export default function useAxios(configRequest){
    const { axiosInstance, method, url, configs = {} } = configRequest;

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)

            try {
                const resp = await axiosInstance[method.toLowerCase()](url, { ...configs, })
                setData(resp.data)       
            } catch(e) {
                setError(e)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [axiosInstance, method, url, configs])

    return [ data, isLoading, error ]
}