"use client";

import { useState, useEffect } from 'react';
import * as Sentry from '@sentry/nextjs';

export default function SentryExamplePage() {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);

  useEffect(() => {
    // Simple connectivity check tanpa method yang tidak ada
    async function checkConnectivity() {
      try {
        // Coba capture message kecil untuk test connectivity
        const eventId = Sentry.captureMessage('Testing Sentry connectivity');
        setIsConnected(eventId !== null && eventId !== '');
      } catch (error) {
        console.error('Sentry connectivity check failed:', error);
        setIsConnected(false);
      }
    }
    
    checkConnectivity();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Sentry Example Page</h1>
      
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Connection Status:</h2>
        {isConnected === null ? (
          <p className="text-yellow-600">Checking connectivity...</p>
        ) : isConnected ? (
          <p className="text-green-600">✅ Connected to Sentry</p>
        ) : (
          <p className="text-red-600">❌ Not connected to Sentry</p>
        )}
      </div>

      <div className="mb-4">
        <button
          onClick={() => {
            Sentry.captureMessage('Test message from button click');
            alert('Test message sent to Sentry!');
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Send Test Message
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            throw new Error('Test error from button click');
          }}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Trigger Test Error
        </button>
      </div>
    </div>
  );
}