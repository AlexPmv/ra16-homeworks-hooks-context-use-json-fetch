import useJsonFetch from "../hooks/useJsonFetch"
import Loading from "./Loading"
import Error from "./Error"

export default function LoadingComponent (props) {
  const { url, opts } = {...props}
  const {data, isLoading, error} = useJsonFetch(url, opts)

  return (
    <div className="container">
      {isLoading ? <Loading /> : null}
      <p className="data">{data ? `Loading complete: ${data}` : null}</p>
    </div>
  )
}