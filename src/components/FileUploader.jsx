import React from 'react';

export default function FileUploader() {
  return (
    <div className="p-4 rounded-lg shadow bg-white w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Subir Archivo</h2>
      <input
        type="file"
        accept=".pdf,.docx,.ppt,.txt"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <p className="text-sm text-gray-500 mt-2">Archivos permitidos: PDF, DOCX, PPT, TXT</p>
    </div>
  );
}