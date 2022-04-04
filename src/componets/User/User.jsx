import { UserContext } from "./UserContext";
import { useContext, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as api from "../../api";

export default function User() {
  const [imputUser, setImputUser] = useState("");
  const { setUser } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [notUserMessage, setNotUserMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    api.checkUsers().then((queryUsers) => {
      setUsers(queryUsers);
    });
  }, []);

  return (
    <section>
      <Link to="/">
        <p>Home</p>
      </Link>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (
            imputUser !== "" &&
            users.some((user) => user.username === imputUser)
          ) {
            setUser(imputUser);
            setNotUserMessage("");
            navigate("/");
          } else {
            setNotUserMessage("Wrong Username");
          }
        }}
      >
        <legend>Enter your Username</legend>
        <input
          className="User__Input"
          type="text"
          value={imputUser}
          onChange={(e) => {
            setImputUser(e.target.value);
          }}
        />
        <p>{notUserMessage}</p>
        <button type="submit">Submit</button>
      </form>
      <button
        type="button"
        onClick={() => {
          setUser("");
        }}
      >
        Log out
      </button>
    </section>
  );
}
