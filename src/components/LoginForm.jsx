import { useState } from "react";

import axios from "axios";

// axios

// useState

const projectID = "5872346f-4809-4ff9-9e66-4957ac68e886";

const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-Id": projectID,
      "User-Name": username,
      "User-Secret": password,
    };

    //
    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
      setError("");
    } catch (error) {
      setError("username or password is incorrect");
    }
    //
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>

        <form onSubmit={handleSubmit}>
          <input
            className="input"
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
          />

          <input
            className="input"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div align="center">
            <button className="button">
              <span>Start Chatting</span>
            </button>
          </div>
        </form>

        <h1>{error}</h1>
      </div>
    </div>
  );
};

export default LoginForm;
