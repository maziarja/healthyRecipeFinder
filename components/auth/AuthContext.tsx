"use client";

import { getSession } from "@/app/_actions/auth/getSession";
import { logoutUser } from "@/app/_actions/auth/logoutUser";
import { useRouter } from "next/navigation";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type User = {
  id: string | undefined;
  email: string | null | undefined;
  name: string | null | undefined;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  logout: () => Promise<void>;
  refreshSession: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
  initialSession?: {
    user: User | null;
    isAuthenticated: boolean;
  };
};

export function AuthProvider({ children, initialSession }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(initialSession?.user ?? null);
  const [isAuthenticated, setIsAuthenticated] = useState(
    initialSession?.isAuthenticated ?? false,
  );
  const [isLoading, setIsLoading] = useState(!initialSession);
  const router = useRouter();

  const refreshSession = async () => {
    try {
      setIsLoading(true);
      const session = await getSession();
      setUser(session.user);
      setIsAuthenticated(session.isAuthenticated);
    } catch (error) {
      console.error("Error refreshing session:", error);
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await logoutUser();
      setUser(null);
      setIsAuthenticated(false);
      router.refresh();
      router.push("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  useEffect(() => {
    // Refresh session on mount if no initial session was provided
    if (!initialSession) {
      refreshSession();
    }
  }, [initialSession]);

  const value: AuthContextType = {
    user,
    isAuthenticated,
    isLoading,
    logout,
    refreshSession,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
