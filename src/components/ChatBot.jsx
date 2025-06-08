import React, { useState, useRef, useEffect } from "react";

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const messagesEndRef = useRef(null);

  // Auto scroll al último mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const botMessage = { sender: "bot", text: getBotResponse(input) };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const getBotResponse = (message) => {
    const msg = message.toLowerCase();

    if (msg.includes("hola") || msg.includes("buenas")) {
      return "¡Hola! Soy EduBot 🤖 ¿En qué te puedo ayudar?";
    }
    if (msg.includes("tarea") || msg.includes("tasks")) {
      return "Puedes ver y marcar tus tareas en la sección 'Tasks'.";
    }
    if (msg.includes("libro") || msg.includes("books") || msg.includes("materia")) {
      return "Puedes buscar libros por materia en la sección 'Buscar libros'.";
    }
    if (msg.includes("perfil") || msg.includes("usuario")) {
      return "Puedes editar tu perfil en la parte superior de la pantalla.";
    }
    if (msg.includes("gracias")) {
      return "¡Con gusto! 😊";
    }

    return "Lo siento, todavía estoy aprendiendo. Por favor intenta con otra pregunta.";
  };

  return (
    <div style={{ maxWidth: "700px", margin: "20px auto", padding: "20px" }}>
      <div className="card">
        <h2 className="title">💬 Chat con EduBot</h2>

        <div
          className="chatbot-messages"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            maxHeight: "350px",
            overflowY: "auto",
            overflowX: "hidden",
            marginBottom: "16px",
            border: "1px solid #ddd",
            padding: "12px",
            borderRadius: "8px",
            backgroundColor: "#fafafa",
          }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`chatbot-message ${msg.sender}`}
              style={{
                alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                backgroundColor: msg.sender === "user" ? "#2d8cff" : "#e0e0e0",
                color: msg.sender === "user" ? "#fff" : "#333",
                borderRadius: "12px",
                padding: "6px 10px",
                marginBottom: "8px",
                maxWidth: "80%",
                wordWrap: "break-word",
              }}
            >
              {msg.text}
            </div>
          ))}

          {/* Div invisible para scroll automático */}
          <div ref={messagesEndRef}></div>
        </div>

        <div
          className="chatbot-input-area"
          style={{ display: "flex", gap: "8px", alignItems: "center" }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Escribe tu mensaje..."
            className="status-input"
            style={{ flex: 1 }}
          />
          <button onClick={sendMessage} className="button-primary">
            →
          </button>
        </div>
      </div>
    </div>
  );
}
