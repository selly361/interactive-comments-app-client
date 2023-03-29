import React from 'react'
import { useAuthContext } from 'hooks/useAuthContext'
import { useForm } from 'react-hook-form'

interface RegisterFormProps {
  onSubmit: (data: RegisterFormData) => void
}

interface RegisterFormData {
  email: string
  password: string
  username: string
}

function RegisterForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>();
  const { signup } = useAuthContext()
  
  const onSubmitHandler = handleSubmit((data: RegisterFormData) => {
    signup(data.email, data.username, data.password)
  })

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label>Email</label>
        <input {...register("email", {
          required: true,
          pattern: {
            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            message: 'Invalid email format'
          }
        })} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label>Password</label>
        <input {...register("password", {
          required: true,
          pattern: {
            value: /^[a-zA-Z0-9]{5,20}$/,
            message: 'Password should be 5-20 alphanumeric characters'
          }
        })} />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <div>
        <label>Username</label>
        <input {...register("username", {
          required: true,
          pattern: {
            value: /^[A-Za-z]\w{3,13}[A-Za-z0-9]$/,
            message: 'Username should be 4-14 alphanumeric characters starting with a letter'
          }
        })} />
        {errors.username && <span>{errors.username.message}</span>}
      </div>

      <button type="submit">Register</button>
    </form>
  )
}

export default RegisterForm
