"use client";

import { SignInInput, signOut, signIn } from 'aws-amplify/auth';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (credentials: SignInInput) => Promise<void>
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: async () => { },
  logout: async () => { },
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async ({ username, password }: SignInInput) => {
    try {
      const { isSignedIn } = await signIn({ username, password });
      if (isSignedIn) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.log("error signing in", error);
      setIsAuthenticated(false);
    }
  };

  const logout = async () => {
    try {
      await signOut();
      setIsAuthenticated(false);
    } catch (error) {
      console.log("error signing out", error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
