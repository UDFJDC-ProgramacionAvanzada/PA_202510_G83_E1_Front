"use client"

import { useState } from "react"

export function useStudyPlanner() {
  const [studyPlan, setStudyPlan] = useState(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [studyGoals, setStudyGoals] = useState([])

  const generateStudyPlan = async (preferences) => {
    setIsGenerating(true)

    try {
      // Simular llamada a IA
      await new Promise((resolve) => setTimeout(resolve, 3000))

      const plan = {
        id: Date.now(),
        title: `Plan de Estudio - ${preferences.subject}`,
        duration: preferences.duration,
        difficulty: preferences.difficulty,
        schedule: generateSchedule(preferences),
        recommendations: generateRecommendations(preferences),
        createdAt: new Date().toISOString(),
      }

      setStudyPlan(plan)
      return plan
    } catch (error) {
      console.error("Error generating study plan:", error)
      throw error
    } finally {
      setIsGenerating(false)
    }
  }

  const generateSchedule = (preferences) => {
    const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
    return days.map((day) => ({
      day,
      sessions: [
        {
          time: "09:00 - 10:30",
          activity: "Lectura y comprensión",
          topic: preferences.subject,
        },
        {
          time: "15:00 - 16:00",
          activity: "Práctica y ejercicios",
          topic: preferences.subject,
        },
      ],
    }))
  }

  const generateRecommendations = (preferences) => {
    return [
      "Utiliza la técnica Pomodoro para mantener la concentración",
      "Revisa los conceptos clave al final de cada sesión",
      "Toma descansos regulares cada 45 minutos",
      "Practica con ejercicios variados para reforzar el aprendizaje",
    ]
  }

  const addStudyGoal = (goal) => {
    const newGoal = {
      id: Date.now(),
      ...goal,
      completed: false,
      createdAt: new Date().toISOString(),
    }
    setStudyGoals((prev) => [...prev, newGoal])
  }

  const toggleGoalCompletion = (goalId) => {
    setStudyGoals((prev) => prev.map((goal) => (goal.id === goalId ? { ...goal, completed: !goal.completed } : goal)))
  }

  return {
    studyPlan,
    isGenerating,
    studyGoals,
    generateStudyPlan,
    addStudyGoal,
    toggleGoalCompletion,
  }
}
