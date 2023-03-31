import type { AuthContextProps, ILogIn, IProps, ISignUp, User } from './types'
import { createContext, useEffect, useState } from 'react'

const URL = process.env.REACT_APP_API_URL

export const AuthContext = createContext<AuthContextProps>({
   user: null,
   isAuthenticated: false,
   login: async () => {},
   logout: async () => {},
   signup: async () => {}
})

function AuthContextProvider({ children }: IProps) {
   const [user, setUser] = useState<User | null>(null)
   const isAuthenticated = !!user


   const login: ILogIn = async (email, password) => {
      try {
         const response = await fetch(`${URL}/login`, {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
               'Content-Type': 'application/json',
            },
         })
         const data = await response.json()

         localStorage.setItem('access_token', data.access_token)
         await getUserData(data.access_token)
      } catch (error) {
         console.error(error)
      }
   }

   const logout = async () => {
      localStorage.removeItem('access_token')
      setUser(null)

      await fetch(`${URL}/logout`)
   }

   const signup: ISignUp = async (email, username, password) => {
      try {
         const response = await fetch(`${URL}/register`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, username, password }),
         })

         if (response.status === 200) {
            await login(email, password)
         } else {
            throw new Error('Signup failed')
         }
      } catch (error) {
         console.error(error)
      }
   }

   const refreshToken = async () => {
      try {
         const response = await fetch(`${URL}/refresh-token`)

         const { access_token } = await response.json()

         localStorage.setItem('access_token', access_token)

         await getUserData(access_token)
      } catch (error) {
         console.error(error)
      }
   }


   const getUserData = async (access_token: string) => {
      try {
         const response = await fetch(`${URL}/user/data`, {
            headers: {
               Authorization: `Bearer ${access_token}`,
            },
         })

         const data = await response.json()
         setUser(data)
      } catch (error) {
         console.error(error)
      }
   }

   return (
      <AuthContext.Provider value={{ user, isAuthenticated, login, logout, signup }}>
         {children}
      </AuthContext.Provider>
   )
}

export default AuthContextProvider
