const TheirMessage = ({ message, lastMessage }) => {
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div
          className="message-avater"
          style={{
            backgroundImage: message.sender && `url(${message.sender.avatar})`,
          }}
        />
      )}

      {message.attachments && message.attachments.length > 0 ? (
        <img
          className="message-image"
          src={message.attachment[0].file}
          alt="message attachment"
          style={{ marginLeft: isFirstMessageByUser ? "4px" : "48px" }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: "left",
            marginLeft: isFirstMessageByUser ? "4px" : "48px",
            backgroundColor: "#CABCDC",
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};

export default TheirMessage;
