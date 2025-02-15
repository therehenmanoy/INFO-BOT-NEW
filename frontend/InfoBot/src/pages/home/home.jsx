import { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    // Simulate bot response (Replace with actual API call)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Hello! How can I help you?", sender: "bot" },
      ]);
    }, 500);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-96 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-500 text-white text-center py-4 text-lg font-semibold">
          Chatbot
        </div>
        <div className="h-96 p-4 overflow-y-auto flex flex-col space-y-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 max-w-[80%] rounded-md ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white self-end"
                  : "bg-gray-200 self-start"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="flex border-t">
          <input
            type="text"
            className="flex-1 p-3 outline-none border-none"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            className="bg-blue-500 text-white px-4 py-3"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
