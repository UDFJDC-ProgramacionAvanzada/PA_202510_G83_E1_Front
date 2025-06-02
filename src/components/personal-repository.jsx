"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FolderOpen, Search, Filter, FileText, ImageIcon, Video, Download, Star } from "lucide-react"

export function PersonalRepository() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [materials] = useState([
    {
      id: 1,
      title: "Cálculo Diferencial - Capítulo 3",
      type: "pdf",
      category: "Matemáticas",
      tags: ["cálculo", "derivadas", "límites"],
      uploadDate: "2024-01-15",
      size: "2.5 MB",
      favorite: true,
    },
    {
      id: 2,
      title: "Historia de América Latina",
      type: "video",
      category: "Historia",
      tags: ["américa latina", "colonización", "independencia"],
      uploadDate: "2024-01-10",
      size: "45.2 MB",
      favorite: false,
    },
    {
      id: 3,
      title: "Algoritmos de Ordenamiento",
      type: "document",
      category: "Programación",
      tags: ["algoritmos", "sorting", "complejidad"],
      uploadDate: "2024-01-08",
      size: "1.8 MB",
      favorite: true,
    },
    {
      id: 4,
      title: "Diagrama de Flujo - Proceso",
      type: "image",
      category: "Programación",
      tags: ["diagrama", "flujo", "proceso"],
      uploadDate: "2024-01-05",
      size: "856 KB",
      favorite: false,
    },
  ])

  const categories = ["all", "Matemáticas", "Historia", "Programación", "Ciencias"]

  const filteredMaterials = materials.filter((material) => {
    const matchesSearch =
      material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      material.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || material.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getFileIcon = (type) => {
    switch (type) {
      case "pdf":
      case "document":
        return <FileText className="h-5 w-5 text-red-500" />
      case "image":
        return <ImageIcon className="h-5 w-5 text-green-500" />
      case "video":
        return <Video className="h-5 w-5 text-blue-500" />
      default:
        return <FileText className="h-5 w-5 text-gray-500" />
    }
  }

  const favoriteCount = materials.filter((m) => m.favorite).length
  const totalSize = materials.reduce((acc, m) => acc + Number.parseFloat(m.size), 0).toFixed(1)

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FolderOpen className="h-5 w-5" />
            Mi Repositorio Personal
          </CardTitle>
          <div className="flex gap-4 text-sm text-gray-600">
            <span>{materials.length} materiales</span>
            <span>{favoriteCount} favoritos</span>
            <span>{totalSize} MB total</span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Buscar en tu repositorio..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>
            </div>
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="text-xs">
                  {category === "all" ? "Todos" : category}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedCategory} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredMaterials.map((material) => (
                  <Card key={material.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          {getFileIcon(material.type)}
                          {material.favorite && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
                        </div>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>

                      <h3 className="font-semibold text-sm mb-2 line-clamp-2">{material.title}</h3>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {material.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {material.tags.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{material.tags.length - 2}
                          </Badge>
                        )}
                      </div>

                      <div className="flex justify-between text-xs text-gray-500">
                        <span>{material.category}</span>
                        <span>{material.size}</span>
                      </div>

                      <div className="text-xs text-gray-400 mt-1">
                        {new Date(material.uploadDate).toLocaleDateString()}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredMaterials.length === 0 && (
                <div className="text-center py-12">
                  <FolderOpen className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-500">No se encontraron materiales</p>
                  <p className="text-sm text-gray-400">Intenta con otros términos de búsqueda</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
