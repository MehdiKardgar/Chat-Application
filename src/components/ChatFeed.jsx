// This component serves as a chat feed and message display section.

import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

// 'ChatFeed' component responsible for displaying chat messages
const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props; // Destructuring props to extract required data

  const chat = chats && chats[activeChat]; // Retrieve the active chat object

  const renderReadReciepts = (message, isMyMessage) =>
    chat.people.map(
      (person, index) =>
        person.last_read === message.id && (
          <div
            key={`read_${index}`}
            className="read-receipt"
            style={{
              float: isMyMessage ? "right" : "left",
              backgroundImage:
                person.person.avatar && `url(${person.person.avatar})`,
            }}
          />
        )
    );

  // Function to render chat messages
  const renderMessages = () => {
    const keys = Object.keys(messages);

    // Mapping through each message and rendering MyMessage or TheirMessage components
    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.userName;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMyMessage ? (
              <MyMessage message={message} /> // Displaying user's own message
            ) : (
              <TheirMessage // Displaying messages from other users
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
          </div>

          {/* Component for read receipts */}
          <div
            className="read-reciepts"
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "68px",
            }}
          >
            {renderReadReciepts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };

  if (!chat) return <div />;

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>

        <div className="chat-subtitle">
          {chat.people.map((person, index) => (
            <span key={person.person.username}>
              {person.person.username} {/* Displaying the username */}
              {index !== chat.people.length - 1 && " & "}{" "}
              {/* Adding '&' if it's not the last username */}
            </span>
          ))}
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: "100px" }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;
