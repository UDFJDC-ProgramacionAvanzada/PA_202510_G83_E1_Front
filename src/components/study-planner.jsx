"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Brain, Target } from "lucide-react"
import { useStudyPlanner } from "../hooks/use-study-planner"

export function StudyPlanner() {
  const { studyPlan, isGenerating, studyGoals, generateStudyPlan, addStudyGoal, toggleGoalCompletion } =
    useStudyPlanner()
  const [preferences, setPreferences] = useState({
    subject: "",
    duration: "",
    difficulty: "",
    goals: "",
    availableTime: "",
  })

  const handleGeneratePlan = async () => {
    if (!preferences.subject || !preferences.duration) {
      alert("Por favor completa los campos requeridos")
      return
    }

    try {
      await generateStudyPlan(preferences)
    } catch (error) {
      alert("Error al generar el plan de estudio")
    }
  }

  const handleAddGoal = () => {
    if (preferences.goals.trim()) {
      addStudyGoal({
        title: preferences.goals,
        subject: preferences.subject,
      })
      setPreferences((prev) => ({ ...prev, goals: "" }))
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            Planificación de Estudio con IA
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="subject">Materia de Estudio *</Label>
              <Input
                id="subject"
                placeholder="Ej: Matemáticas, Historia, Programación"
                value={preferences.subject}
                onChange={(e) => setPreferences((prev) => ({ ...prev, subject: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Duración del Plan *</Label>
              <Select onValueChange={(value) => setPreferences((prev) => ({ ...prev, duration: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona duración" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-week">1 Semana</SelectItem>
                  <SelectItem value="2-weeks">2 Semanas</SelectItem>
                  <SelectItem value="1-month">1 Mes</SelectItem>
                  <SelectItem value="3-months">3 Meses</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="difficulty">Nivel de Dificultad</Label>
              <Select onValueChange={(value) => setPreferences((prev) => ({ ...prev, difficulty: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona nivel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Principiante</SelectItem>
                  <SelectItem value="intermediate">Intermedio</SelectItem>
                  <SelectItem value="advanced">Avanzado</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="time">Tiempo Disponible por Día</Label>
              <Select onValueChange={(value) => setPreferences((prev) => ({ ...prev, availableTime: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Horas por día" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-hour">1 hora</SelectItem>
                  <SelectItem value="2-hours">2 horas</SelectItem>
                  <SelectItem value="3-hours">3 horas</SelectItem>
                  <SelectItem value="4-hours">4+ horas</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="goals">Agregar Meta de Estudio</Label>
            <div className="flex gap-2">
              <Input
                id="goals"
                placeholder="Ej: Completar capítulo 5, Resolver 20 ejercicios"
                value={preferences.goals}
                onChange={(e) => setPreferences((prev) => ({ ...prev, goals: e.target.value }))}
              />
              <Button onClick={handleAddGoal} variant="outline">
                <Target className="h-4 w-4 mr-2" />
                Agregar
              </Button>
            </div>
          </div>

          <Button onClick={handleGeneratePlan} disabled={isGenerating} className="w-full">
            {isGenerating ? "Generando Plan..." : "Generar Plan de Estudio con IA"}
          </Button>
        </CardContent>
      </Card>

      {studyGoals.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Metas de Estudio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {studyGoals.map((goal) => (
                <div key={goal.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <input
                    type="checkbox"
                    checked={goal.completed}
                    onChange={() => toggleGoalCompletion(goal.id)}
                    className="rounded"
                  />
                  <span className={goal.completed ? "line-through text-gray-500" : ""}>{goal.title}</span>
                  <span className="text-xs text-gray-500 ml-auto">{goal.subject}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {studyPlan && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              {studyPlan.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Horario Semanal</h3>
                <div className="space-y-2">
                  {studyPlan.schedule.map((day, index) => (
                    <div key={index} className="border rounded-lg p-3">
                      <h4 className="font-medium text-sm mb-2">{day.day}</h4>
                      {day.sessions.map((session, sessionIndex) => (
                        <div key={sessionIndex} className="text-xs text-gray-600 mb-1">
                          <Clock className="h-3 w-3 inline mr-1" />
                          {session.time} - {session.activity}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Recomendaciones de la IA</h3>
                <div className="space-y-2">
                  {studyPlan.recommendations.map((rec, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{rec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
