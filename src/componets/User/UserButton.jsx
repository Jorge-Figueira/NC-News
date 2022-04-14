import { useNavigate, withRouter } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext } from "react";

export default function UserButton() {
  const { user } = useContext(UserContext);

  let navigate = useNavigate();
  const path = window.location.pathname;
  return (
    <section>
      {path === "/user" && null}
      {path !== "/user" && (
        <button
          className="Button"
          onClick={() => {
            navigate("/user");
          }}
        >
          {user === "" ? "Log in" : `${user}`}
        </button>
      )}
    </section>
  );
}
