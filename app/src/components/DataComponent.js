import useJsonFetch from "../hooks/useJsonFetch"
import Loading from "./Loading"


export default function DataComponent (props) {
  const { url, opts } = {...props}
  const {data, isLoading, error} = useJsonFetch(url, opts)

  return (
    <div className="container">
      <p className="data">{data ? `Data received: ${data}` : null}</p>
    </div>
  )
}