import react from "react"
import useAxios from './useAxios'
import baseUrl from './baseUrl';

export default function Request() {
  const [data, error, isLoading] = useAxios({ axiosInstance: baseUrl, method: 'GET', url: 'pokemon', })

  return(
    <>
    {error && <div>{error}</div>}

    { isLoading ? (<div>Carregando...</div>) : 
        (
          <>            
            { data?.results?.map((poke) => <div key={poke.name}>{poke.name}</div>) }
          </>
        )
    }
    </>
  )
}