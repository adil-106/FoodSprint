import { useRouteError } from "react-router"

const Error = () => {
    const errData = useRouteError();
    console.log(errData);
    return (<div className="error-route">
        <h1>Oops an error has occurred!</h1>
        <h2>{errData.status} - {errData.statusText}</h2>
    </div>)
}

export default Error;