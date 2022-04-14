import { UserContext } from "./UserContext";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as api from "../../api";

export default function User() {
  const [imputUser, setImputUser] = useState("");
  const { setUser, user } = useContext(UserContext);
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
      <button
        className="Button"
        type="button"
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>

      <form
        className="form__InputUser"
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
        <legend id="Enter_username">Enter your Username</legend>
        <input
          className="User__Input"
          type="text"
          value={imputUser}
          onChange={(e) => {
            setImputUser(e.target.value);
          }}
        />
        <p>{notUserMessage}</p>
        <button className="Button" type="submit">
          Submit
        </button>
      </form>
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
  );
}
