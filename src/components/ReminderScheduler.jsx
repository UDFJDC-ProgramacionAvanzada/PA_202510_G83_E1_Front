import React, { useState } from 'react';

export default function ReminderScheduler() {
  const [date, setDate] = useState('');

  return (
    <div className="p-4 rounded-lg shadow bg-white w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Programar Recordatorio</h2>
      <input
        type="text"
        placeholder="Nombre del archivo"
        className="mb-2 p-2 border w-full rounded"
      />
      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="mb-4 p-2 border w-full rounded"
      />
      <button className="bg-green-600 text-white px-4 py-2 rounded">Guardar Recordatorio</button>
    </div>
  );
}
