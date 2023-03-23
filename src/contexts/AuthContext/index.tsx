import type { AuthContextProps, ILogIn, IProps, ISignUp, User } from "./types";
import { createContext, useState } from "react";

import axios from "axios";

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  isAuthenticated: false,
  login: async () => {},
  logout: async () => {},
  signup: async () => {},
  refreshToken: async () => {},
});

function AuthContextProvider({ children }: IProps) {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user;

  const login: ILogIn = async (email, password) => {
    try {
      const response = await axios.post("/login", { email, password });
      const { access_token } = response.data;
      localStorage.setItem("access_token", access_token);
      await getUserData();
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    setUser(null);
  };

  const signup: ISignUp = async (email, username, password) => {
    try {
      const response = await axios.post("/register", {
        email,
        username,
        password,
      });

      if (response.status === 200) {
        await login(email, password);
      } else {
        throw new Error("Signup failed");
      }
    } catch (error) {
      console.error(error);
    }
  }

  const refreshToken = async () => {
    try {
      const { access_token } = (await axios("/api/auth/refresh-token")).data;
      localStorage.setItem("access_token", access_token);
      await getUserData();
    } catch (error) {
      console.error(error);
    }
  }

  const getUserData = async () => {
    try {
      const response = await axios.get("/user/data", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, signup, refreshToken }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
