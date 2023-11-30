const MyMessage = ({ message }) => {
  if (message.attachments && message.attachments > 0) {
    return (
      <img
        className="message-image"
        src={message.attachment[0].file}
        alt="message attachment"
        style={{ float: "right" }}
      />
    );
  }

  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        backgroundColor: "#3B2A50",
      }}
    >
      {message.text}
    </div>
  );
};

export default MyMessage;
