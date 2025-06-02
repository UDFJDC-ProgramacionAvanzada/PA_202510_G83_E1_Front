"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Search, MessageCircle, UserPlus, TrendingUp, Calendar } from "lucide-react"

export function StudyCommunities() {
  const [searchTerm, setSearchTerm] = useState("")
  const [communities] = useState([
    {
      id: 1,
      name: "Matemáticas Avanzadas",
      description: "Comunidad para estudiantes de cálculo, álgebra y matemáticas superiores",
      members: 1247,
      category: "Matemáticas",
      isJoined: true,
      activity: "high",
      recentPosts: 23,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      name: "Programación Web",
      description: "Aprende desarrollo web con HTML, CSS, JavaScript y frameworks modernos",
      members: 892,
      category: "Tecnología",
      isJoined: false,
      activity: "high",
      recentPosts: 45,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      name: "Historia Universal",
      description: "Discusiones sobre eventos históricos, culturas y civilizaciones",
      members: 634,
      category: "Historia",
      isJoined: true,
      activity: "medium",
      recentPosts: 12,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 4,
      name: "Ciencias Naturales",
      description: "Física, química, biología y ciencias de la tierra",
      members: 756,
      category: "Ciencias",
      isJoined: false,
      activity: "medium",
      recentPosts: 18,
      image: "/placeholder.svg?height=60&width=60",
    },
  ])

  const [recentActivity] = useState([
    {
      id: 1,
      user: "María González",
      action: "compartió un documento",
      community: "Matemáticas Avanzadas",
      time: "hace 2 horas",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 2,
      user: "Carlos Ruiz",
      action: "inició una discusión",
      community: "Programación Web",
      time: "hace 4 horas",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 3,
      user: "Ana López",
      action: "respondió a una pregunta",
      community: "Historia Universal",
      time: "hace 6 horas",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  ])

  const filteredCommunities = communities.filter(
    (community) =>
      community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      community.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      community.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const joinedCommunities = communities.filter((c) => c.isJoined)
  const suggestedCommunities = communities.filter((c) => !c.isJoined)

  const getActivityColor = (activity) => {
    switch (activity) {
      case "high":
        return "text-green-600"
      case "medium":
        return "text-yellow-600"
      case "low":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  const getActivityText = (activity) => {
    switch (activity) {
      case "high":
        return "Alta actividad"
      case "medium":
        return "Actividad media"
      case "low":
        return "Baja actividad"
      default:
        return "Sin actividad"
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Comunidades de Estudio
          </CardTitle>
          <div className="flex gap-4 text-sm text-gray-600">
            <span>{joinedCommunities.length} comunidades unidas</span>
            <span>{communities.length} comunidades disponibles</span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Buscar comunidades por nombre, descripción o categoría..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">Todas</TabsTrigger>
              <TabsTrigger value="joined">Mis Comunidades</TabsTrigger>
              <TabsTrigger value="suggested">Sugeridas</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredCommunities.map((community) => (
                  <Card key={community.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={community.image || "/placeholder.svg"} alt={community.name} />
                          <AvatarFallback>{community.name.charAt(0)}</AvatarFallback>
                        </Avatar>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold text-sm truncate">{community.name}</h3>
                            <Badge variant="outline" className="text-xs ml-2">
                              {community.category}
                            </Badge>
                          </div>

                          <p className="text-xs text-gray-600 mb-3 line-clamp-2">{community.description}</p>

                          <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                            <span className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              {community.members.toLocaleString()} miembros
                            </span>
                            <span className={`flex items-center gap-1 ${getActivityColor(community.activity)}`}>
                              <TrendingUp className="h-3 w-3" />
                              {getActivityText(community.activity)}
                            </span>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">
                              {community.recentPosts} publicaciones recientes
                            </span>
                            <Button size="sm" variant={community.isJoined ? "outline" : "default"} className="text-xs">
                              {community.isJoined ? (
                                <>
                                  <MessageCircle className="h-3 w-3 mr-1" />
                                  Ver
                                </>
                              ) : (
                                <>
                                  <UserPlus className="h-3 w-3 mr-1" />
                                  Unirse
                                </>
                              )}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="joined" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {joinedCommunities.map((community) => (
                  <Card key={community.id} className="border-blue-200 bg-blue-50">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={community.image || "/placeholder.svg"} alt={community.name} />
                          <AvatarFallback>{community.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-sm">{community.name}</h3>
                          <p className="text-xs text-gray-600">{community.members.toLocaleString()} miembros</p>
                        </div>
                      </div>
                      <Button size="sm" className="w-full">
                        <MessageCircle className="h-3 w-3 mr-2" />
                        Ir a la comunidad
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="suggested" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {suggestedCommunities.map((community) => (
                  <Card key={community.id} className="border-green-200 bg-green-50">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={community.image || "/placeholder.svg"} alt={community.name} />
                          <AvatarFallback>{community.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm mb-1">{community.name}</h3>
                          <p className="text-xs text-gray-600 mb-2 line-clamp-2">{community.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">{community.members.toLocaleString()} miembros</span>
                            <Button size="sm" variant="default">
                              <UserPlus className="h-3 w-3 mr-1" />
                              Unirse
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Actividad Reciente
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={activity.avatar || "/placeholder.svg"} alt={activity.user} />
                  <AvatarFallback>{activity.user.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-medium">{activity.user}</span> {activity.action} en{" "}
                    <span className="font-medium">{activity.community}</span>
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
