import React, { useState, useEffect } from "react";
import "./App.css";
import { config } from "../../../config/constants.js";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useUserActions } from "../entities/users/hooks/useUserActions.js";

function rot13(s) {
  return s.replace(
    /[A-Z]/gi,
    (c) =>
      "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm"[
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".indexOf(c)
      ]
  );
}

const Home = () => {
  const [message, setMessage] = useState("");
  const [someText, setSomeText] = useState("Sreenzragnf");
  const [answer, setAnswer] = useState(null);

  useEffect(() => {
    fetch(config.BASE_PATH + "/hello")
      .then((response) => response.text())
      .then((error) => {
        setMessage(error);
      });
  }, []);

  const onSubmit = (ev) => {
    ev.preventDefault();
    setAnswer(rot13(someText));
  };

  const users = useSelector((state) => state.users);
  const { removeUser } = useUserActions();

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={process.env.PUBLIC_URL + "/assets/logo.svg"}
          className="App-logo"
          alt="logo"
        />
        <h1 className="App-title">{message}</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <p>
        <Link to="test">App route</Link>
      </p>
      <form action="" onSubmit={onSubmit}>
        <p>
          <label htmlFor="some-text">Input some text: </label>
          <input
            name="some-text"
            id="some-text"
            value={someText}
            onChange={(ev) => setSomeText(ev.currentTarget.value)}
          />
        </p>
        <button>Calculate</button>
      </form>
      <div>
        <h2>Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <>
                {user.name}
                <button onClick={() => removeUser(user.id)}>Remove</button>
              </>
            </li>
          ))}
        </ul>
      </div>
      {answer && (
        <p>
          The answer is: <strong>{answer}</strong>
        </p>
      )}
    </div>
  );
};

export default Home;
