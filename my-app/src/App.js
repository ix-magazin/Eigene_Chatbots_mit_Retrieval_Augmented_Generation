import "./App.css";
import user_logo from "./images/user-logo.svg";
import chatbot_logo from "./images/bot-logo.png";
import { useState, useRef, useEffect } from "react";
import ChatMessage from "./components/ChatMessage";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [disableInput, setDisableInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const inputReference = useRef(null); // reference to chat input field to focus it after enable/disable

  useEffect(() => {
    executeScroll();
  }, [chatMessages]);
  useEffect(() => {
    inputReference.current.focus();
  }, [disableInput]);

  // scroll down to most recently generated message | executed whenever new one is added to dom
  const executeScroll = () => {
    var elem = document.getElementById("endofchat");
    var position = elem.getBoundingClientRect().top + window.scrollY - 100; // SOURCE
    window.scrollTo({ top: position, behavior: "smooth" });
  };

  function handleChatInput(e) {
    setChatInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setDisableInput(true); // Eingabefeld vorerst blockieren
    setChatInput(""); // Eingabefeld leeren
    // Nutzerfrage an die bisherigen Chatnachrichten anhängen
    setChatMessages((chatMessages) => [
      ...chatMessages,
      { logo: user_logo, username: "Du", message: chatInput },
    ]);
    setIsLoading(true); // Ladeanimation anzeigen
    fetch("http://127.0.0.1:5000/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(chatInput),
    })
      .then((response) => response.text())
      .then((response) => {
        setIsLoading(false); // Ladeanimation entfernen
        // GPT-4 Antwort an die bisherigen Nachrichten anhängen
        setChatMessages((chatMessages) => [
          ...chatMessages,
          { logo: chatbot_logo, username: "Chatbot", message: response },
        ]);
        setDisableInput(false); // Eingabefeld reaktivieren
      });
  }

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>RAG-Chatbot</title>
      <div className="header">
        <h1>RAG-Chatbot</h1>
      </div>
      <div className="chat">
        {chatMessages.map((currentItem) => {
          return (
            <ChatMessage
              logo={currentItem.logo}
              username={currentItem.username}
              message={currentItem.message}
              url={currentItem.url}
            />
          );
        })}
        {isLoading ? <LoadingSpinner /> : null}
        <div id="endofchat"></div>
      </div>
      <div className="mb-3">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            ref={inputReference}
            onChange={handleChatInput}
            className="form-control"
            value={chatInput}
            disabled={disableInput}
            placeholder="Stelle eine Frage..."
          />
          <input type="submit" hidden />
        </form>
      </div>
    </div>
  );
}

export default App;
