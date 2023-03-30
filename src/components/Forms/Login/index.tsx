import { Error, StyledFieldset, StyledForm, StyledInput, StyledLabel } from 'shared/styles'

import { Button } from 'shared/components'
import { ILoginForm } from './Login.types'
import { useAuthContext } from 'hooks/useAuthContext'
import { useForm } from 'react-hook-form'

function LoginForm() {
   const {register, handleSubmit, formState} = useForm<ILoginForm>()
   const { errors } = formState

   const { login, isAuthenticated } = useAuthContext()

   const onSubmit = (data: ILoginForm) => {
      login(data.email, data.password)
   }



   return (
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
         <StyledFieldset>
            <StyledLabel htmlFor="email">Email</StyledLabel>
            <StyledInput
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
            {errors.email && <Error>{errors.email.message}</Error>}
         </StyledFieldset>

         <StyledFieldset>
            <StyledLabel htmlFor="password">Password</StyledLabel>
            <StyledInput
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
            {errors.password && <Error>{errors.password.message}</Error>}
         </StyledFieldset>
         <Button content="Submit" onClick={onSubmit} />
      </StyledForm>
   )
}

export default LoginForm
