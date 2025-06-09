import React from 'react';
import SummaryGenerator from '../components/SummaryGenerator';
import FileUploader from '../components/FileUploader';
import ReminderScheduler from '../components/ReminderScheduler';
import FileManager from '../components/FileManager';
import SessionManager from '../components/SessionManager';

export default function UserTools() {
  return (
    <div className="space-y-8 p-6">
      <FileUploader />
      <SummaryGenerator />
      <ReminderScheduler />
      <FileManager />
      <SessionManager />
    </div>
  );
}