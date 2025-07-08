"use client";

import { SignInInput, signOut, signIn, getCurrentUser, AuthUser } from 'aws-amplify/auth';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  user: AuthUser | null;
  loading: boolean;
  login: (credentials: SignInInput) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  loading: true,
  login: async () => { },
  logout: async () => { },
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        if (currentUser) {
          setIsAuthenticated(true);
          setUser(currentUser);
        } else {
          setIsAuthenticated(false);
          setUser(null);
        }
      } catch (error) {
        console.log("error getting current user", error);
        setIsAuthenticated(false);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkUser();
  }, []);

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
    <AuthContext.Provider value={{ isAuthenticated, user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
