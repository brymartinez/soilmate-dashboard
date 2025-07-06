"use client";

import { useAuth } from '@/context/AuthContext';
import { useState } from 'react';

export default function LoginComponent() {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md flex flex-col items-center w-full max-w-xs">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="mb-4 px-3 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="mb-6 px-3 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          className="bg-green-500 hover:bg-green-600 rounded-md px-5 py-2 text-lg my-1 flex transition duration-150 ease-in-out text-white focus:outline-none focus:ring-2 focus:ring-offset-2 justify-center cursor-pointer items-center whitespace-nowrap w-full"
          onClick={() => login({username, password})}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
