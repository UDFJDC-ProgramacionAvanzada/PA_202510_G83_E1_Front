"use client"

import { useState, useCallback } from "react"

export function useAIAssistant() {
  const [messages, setMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  const [suggestions, setSuggestions] = useState([])

  const sendMessage = useCallback(async (message) => {
    const userMessage = {
      id: Date.now(),
      text: message,
      sender: "user",
      timestamp: new Date().toISOString(),
    }

    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)

    try {
      // Simular respuesta de IA
      await new Promise((resolve) => setTimeout(resolve, 2000))

      const aiResponse = generateAIResponse(message)
      const aiMessage = {
        id: Date.now() + 1,
        text: aiResponse,
        sender: "ai",
        timestamp: new Date().toISOString(),
      }

      setMessages((prev) => [...prev, aiMessage])
      generateSuggestions(message)
    } catch (error) {
      console.error("Error sending message:", error)
    } finally {
      setIsTyping(false)
    }
  }, [])

  const generateAIResponse = (userMessage) => {
    const responses = {
      ayuda: "Estoy aquí para ayudarte con tus estudios. ¿En qué materia necesitas asistencia?",
      matemáticas:
        "Las matemáticas requieren práctica constante. Te recomiendo empezar con ejercicios básicos y aumentar gradualmente la dificultad.",
      organización:
        "Para una mejor organización, te sugiero crear un horario de estudio y dividir las tareas en bloques manejables.",
      default:
        "Entiendo tu consulta. Basándome en tu perfil de estudio, te recomiendo revisar los materiales relacionados y practicar con ejercicios similares.",
    }

    const lowerMessage = userMessage.toLowerCase()
    for (const [key, response] of Object.entries(responses)) {
      if (lowerMessage.includes(key)) {
        return response
      }
    }
    return responses.default
  }

  const generateSuggestions = (userMessage) => {
    const newSuggestions = [
      "Crear un plan de estudio personalizado",
      "Buscar materiales relacionados",
      "Unirse a una comunidad de estudio",
      "Programar sesiones de repaso",
    ]
    setSuggestions(newSuggestions)
  }

  const clearChat = useCallback(() => {
    setMessages([])
    setSuggestions([])
  }, [])

  return {
    messages,
    isTyping,
    suggestions,
    sendMessage,
    clearChat,
  }
}
