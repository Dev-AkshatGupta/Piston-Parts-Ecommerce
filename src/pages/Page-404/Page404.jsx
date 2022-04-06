import "./Page404.css";
import { Link } from "react-router-dom";
function Page404() {
  return (
    <div className="page-404">
      <span className="text"> PAGE 404 Go Back to Homepage</span>
      <Link to="/" className="btn btn-outline-pri">
        Home Page
      </Link>
    </div>
  );
}

export { Page404 };
