import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext } from "react";

export default function UserButton() {
  const { user, setUser } = useContext(UserContext);

  let navigate = useNavigate();
  const path = window.location.pathname;
  return (
    <section id="login_button_section">
      {path === "/user" && (
        <section>
          <h3 id="user_login">{user}</h3>
          <button
            className="Button"
            type="button"
            onClick={() => {
              setUser("");
            }}
          >
            Log out
          </button>
        </section>
      )}
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
