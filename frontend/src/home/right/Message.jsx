function Message({ message, previousMessage }) {
  // Extract newMessage if it's wrapped
  const actualMessage = message?.newMessage || message;

  console.log("Received message: ", actualMessage); // Check the message structure

  if (!actualMessage || !actualMessage._id || !actualMessage.message) {
    console.error("Invalid message object:", actualMessage);
    return null;
  }

  const authUser = JSON.parse(localStorage.getItem("messenger"));
  if (!authUser || !authUser.user || !authUser.user._id) {
    console.error("Auth user is not available or has an incorrect structure.");
    return null;
  }

  const isMyMessage = actualMessage.senderId === authUser.user._id;
  const chatClass = isMyMessage ? "chat-end pr-2" : "chat-start pl-2";
  const chatColor = isMyMessage ? "bg-neonCyan" : "bg-lavenderBlue";

  const createdAt = new Date(actualMessage.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const formattedDate = createdAt.toLocaleDateString();

  let showDate = false;
  if (
    !previousMessage || // First message or no previous message
    new Date(previousMessage.createdAt).toLocaleDateString() !== formattedDate
  ) {
    showDate = true;
  }

  return (
    <div className="pt-3 pl-3 p-2">
      {showDate && (
        <div className="text-center text-sm font-bold font-robotoMono my-2">
          {formattedDate}
        </div>
      )}
      <div className={chatClass}>
        <div
          className={`chat-bubble chat-bubble-accent ${chatColor} font-sansSarif text-md shadow-md`}
        >
          {actualMessage.message}
        </div>
        <div className="text-xs font-robotoMono">{formattedTime}</div>
      </div>
    </div>
  );
}
export default Message;
