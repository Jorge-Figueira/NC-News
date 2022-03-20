import { Link } from "react-router-dom";
export default function ErrorPage() {
  return (
    <h3>
      Are you lost? Here is the way <Link to="/">home</Link>
    </h3>
  );
}
