import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <div>
            <h1>404</h1>
            <p>Page not found</p>
            <Link to="/">Go back home</Link>
        </div>
    )
}

export default ErrorPage;