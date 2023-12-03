// This component utilizes the 'ChatEngine' component from 'react-chat-engine' to set up a chat application. Here are comments for each section:

import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

const projectID = "5872346f-4809-4ff9-9e66-4957ac68e886";

function App() {
  if (!localStorage.getItem("username")) return <LoginForm />;

  // Main container for the chat application
  //  'ChatEngine' component for handling chat functionalities with various props
  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
    />
  );
}

export default App;
