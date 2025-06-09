import React from 'react';

export default function SessionManager() {
  return (
    <div className="p-4 bg-white rounded-lg shadow w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Gestor de Sesiones</h2>
      <p className="text-gray-700">Tu sesión está activa en este dispositivo.</p>
      <p className="text-sm text-gray-500">Puedes acceder desde cualquier lugar usando tus credenciales.</p>
    </div>
  );
} 