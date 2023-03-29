import { ILoginForm } from './Login.types'
import React from 'react'
import { useAuthContext } from 'hooks/useAuthContext'
import { useForm } from 'react-hook-form'

function LoginForm() {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<ILoginForm>()

   const { login, isAuthenticated } = useAuthContext()

   const onSubmit = (data: ILoginForm) => {
      login(data.email, data.password)
   }

   if (isAuthenticated) {
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div>
            <label htmlFor="email">Email</label>
            <input
               type="text"
               id="email"
               {...register('email', {
                  required: 'Email is required',
                  pattern: {
                     value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                     message: 'Invalid email address',
                  },
               })}
            />
            {errors.email && <span>{errors.email.message}</span>}
         </div>

         <div>
            <label htmlFor="password">Password</label>
            <input
               type="password"
               id="password"
               {...register('password', {
                  required: 'Password is required',
                  pattern: {
                     value: /^[a-zA-Z0-9]{5,20}$/,
                     message:
                        'Password must be between 5 and 20 characters and contain only letters and numbers',
                  },
               })}
            />
            {errors.password && <span>{errors.password.message}</span>}
         </div>

         <button type="submit">Login</button>
      </form>
   )
}

export default LoginForm
