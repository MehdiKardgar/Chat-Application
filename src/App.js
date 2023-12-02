// This component utilizes the 'ChatEngine' component from 'react-chat-engine' to set up a chat application. Here are comments for each section:

import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

function App() {
  if (!localStorage.getItem("username")) {
    return <LoginForm />;
  }

  return (
    // Main container for the chat application
    <div className="App">
      {/* 'ChatEngine' component for handling chat functionalities with various props */}
      <ChatEngine
        height="100vh" // Set the height of the ChatEngine component
        projectID="5872346f-4809-4ff9-9e66-4957ac68e886" // Unique project ID for authentication and accessing chat data
        userName="Mehdi" // User's username for authentication
        userSecret="rona1393" // User's secret or password for authentication
        // 'renderChatFeed' function to customize the chat feed appearance by passing props to the 'ChatFeed' component.
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        // Action triggered when a new message arrives
        onNewMessage={() =>
          new Audio(
            "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
          ).play()
        }
      />
    </div>
  );
}

export default App;
