import Header from "./componets/MainPage/Header";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PageCreator from "./componets/MainPage/PageCreator";
import SingleArticle from "./componets/SingleArticle/SingleArticle";
import User from "./componets/User/User";
import "./App.css";
import { UserContext } from "./componets/User/UserContext";
import { useState } from "react";
import ErrorPage from "./componets/ErrorPage/ErrorPage";

function App() {
  const [user, setUser] = useState("");
  console.log(user, "<<<<<<user");

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="App">
          <button
            className="Button"
            onClick={() => {
              window.location.href = "/user";
            }}
          >
            {user === "" ? "Log in" : `${user}`}
          </button>

          <Header />
          <Routes>
            <Route path="/" element={<PageCreator />} />
            <Route path="/topics/:topic" element={<PageCreator />} />
            <Route path="/articles/:article_id" element={<SingleArticle />} />
            <Route path="/user" element={<User />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
