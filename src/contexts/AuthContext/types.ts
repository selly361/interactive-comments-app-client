import { ReactNode } from 'react'

export interface User {
  id: string;
  profile_image: string;
  username: string;
  email: string;
}

export type ISignUp = (
  email: string,
  username: string,
  password: string
) => Promise<void>;
export type ILogIn = (email: string, password: string) => Promise<void>;

export interface AuthContextProps {
  user: User | null;
  isAuthenticated: boolean;
  login: ILogIn;
  signup: ISignUp;
  logout: () => void;
  refreshToken: () => void;
}

export interface IProps {
  children: ReactNode;
}
