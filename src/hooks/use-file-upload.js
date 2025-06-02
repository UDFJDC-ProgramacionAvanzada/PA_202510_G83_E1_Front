"use client"

import { useState, useCallback } from "react"

export function useFileUpload() {
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  const uploadFile = useCallback(async (file) => {
    setIsUploading(true)
    setUploadProgress(0)

    try {
      // Simular progreso de subida
      const progressInterval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 90) {
            clearInterval(progressInterval)
            return 90
          }
          return prev + 10
        })
      }, 200)

      // Simular API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      clearInterval(progressInterval)
      setUploadProgress(100)

      const newFile = {
        id: Date.now(),
        name: file.name,
        size: file.size,
        type: file.type,
        uploadDate: new Date().toISOString(),
        url: URL.createObjectURL(file),
      }

      setUploadedFiles((prev) => [...prev, newFile])

      setTimeout(() => {
        setIsUploading(false)
        setUploadProgress(0)
      }, 500)

      return newFile
    } catch (error) {
      setIsUploading(false)
      setUploadProgress(0)
      throw error
    }
  }, [])

  const removeFile = useCallback((fileId) => {
    setUploadedFiles((prev) => prev.filter((file) => file.id !== fileId))
  }, [])

  return {
    uploadedFiles,
    isUploading,
    uploadProgress,
    uploadFile,
    removeFile,
  }
}
