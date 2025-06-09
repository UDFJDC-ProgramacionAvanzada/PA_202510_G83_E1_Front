import React from 'react';

export default function SummaryGenerator() {
  return (
    <div className="p-4 rounded-lg shadow bg-white w-full max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Generar Resumen Automático</h2>
      <input type="file" className="mb-4" accept=".pdf,.docx,.ppt,.txt" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Generar Resumen</button>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Resumen:</h3>
        <p className="text-gray-700">(Aquí aparecerá el resumen generado)</p>
      </div>
    </div>
  );
}
