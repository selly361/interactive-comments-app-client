import { Error, StyledFieldset, StyledForm, StyledInput, StyledLabel } from 'shared/styles'

import { Button } from 'shared/components'
import React from 'react'
import { RegisterFormData } from "./Register.types"
import { useAuthContext } from 'hooks/useAuthContext'
import { useForm } from 'react-hook-form'

function RegisterForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>();
  const { signup } = useAuthContext()
  
  const onSubmitHandler = handleSubmit((data: RegisterFormData) => {
    signup(data.email, data.username, data.password)
  })

  return (
    <StyledForm onSubmit={onSubmitHandler}>
      <StyledFieldset>
        <StyledLabel>Email</StyledLabel>
        <StyledInput {...register("email", {
          required: true,
          pattern: {
            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            message: 'Invalid email format'
          }
        })} />
        {errors.email && <Error>{errors.email.message}</Error>}
      </StyledFieldset>

      <StyledFieldset>
        <StyledLabel>Password</StyledLabel>
        <StyledInput {...register("password", {
          required: true,
          pattern: {
            value: /^[a-zA-Z0-9]{5,20}$/,
            message: 'Password should be 5-20 alphanumeric characters'
          }
        })} />
        {errors.password && <Error>{errors.password.message}</Error>}
      </StyledFieldset>

      <StyledFieldset>
        <StyledLabel>Username</StyledLabel>
        <StyledInput {...register("username", {
          required: true,
          pattern: {
            value: /^[A-Za-z]\w{3,13}[A-Za-z0-9]$/,
            message: 'Username should be 3-14 alphanumeric characters starting with a letter'
          }
        })} />
        {errors.username && <Error>{errors.username.message}</Error>}
      </StyledFieldset>

      <Button content="Register" onClick={onSubmitHandler} />
    </StyledForm>
  )
}

export default RegisterForm
