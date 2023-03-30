import useJsonFetch from "../hooks/useJsonFetch"
import Loading from "./Loading"
import Error from "./Error"

export default function ErrorComponent (props) {
  const { url, opts } = {...props}
  const {data, isLoading, error} = useJsonFetch(url, opts)

  return (
    <div className="container">
      {isLoading ? <Loading /> : null}
      {error ? <Error /> : null}
      {error ? console.error(error) : null}
    </div>
  )
} 