"use client";

import { signIn } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';

const loginSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginComponent() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    setLoading(true);
    try {
      await signIn({ username: data.username, password: data.password });
      router.push('/');
    } catch (error) {
      // TODO: show error to user
      console.log('error signing in', error);
      setLoading(false);
    }
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md flex flex-col items-center w-full max-w-xs">
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Username"
            {...register('username')}
            className="mb-4 px-3 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400"
            disabled={loading}
          />
          {errors.username && (
            <span className="text-red-500 text-xs mb-2 block">{errors.username.message}</span>
          )}
          <input
            type="password"
            placeholder="Password"
            {...register('password')}
            className="mb-6 px-3 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400"
            disabled={loading}
          />
          {errors.password && (
            <span className="text-red-500 text-xs mb-2 block">{errors.password.message}</span>
          )}
          <Button
            type="submit"
            className="bg-green-500 hover:bg-green-600 rounded-md px-5 py-2 text-lg my-1 flex transition duration-150 ease-in-out text-white focus:outline-none focus:ring-2 focus:ring-offset-2 justify-center items-center whitespace-nowrap w-full disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </Button>
        </form>
      </div>
    </div>
  );
}
