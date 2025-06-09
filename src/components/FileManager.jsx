import React from 'react';

const files = [
  { name: 'Apuntes_Matematicas.pdf', date: '2025-06-01' },
  { name: 'Clase_Historia.ppt', date: '2025-06-04' },
];

export default function FileManager() {
  return (
    <div className="p-4 rounded-lg shadow bg-white w-full max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Mis Archivos</h2>
      <ul className="space-y-2">
        {files.map((file, idx) => (
          <li
            key={idx}
            className="flex justify-between items-center p-2 border rounded"
          >
            <div>
              <p className="font-medium">{file.name}</p>
              <p className="text-sm text-gray-500">Subido: {file.date}</p>
            </div>
            <button className="text-blue-600 hover:underline">Ver</button>
          </li>
        ))}
      </ul>
    </div>
  );
}