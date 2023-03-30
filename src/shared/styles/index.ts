import styled from 'styled-components'


/* Shared Form Styles */ 

const StyledForm = styled.form`
   display: flex;
   flex-direction: column;
   justify-items: center;
   width: 400px;
   margin: auto;
`

const StyledFieldset = styled.fieldset`
   display: flex;
   flex-direction: column;
   margin-bottom: 16px;
`

const StyledLabel = styled.label`
   font-size: 14px;
   font-weight: bold;
   margin-bottom: 8px;
`

const StyledInput = styled.input`
   padding: 8px;
   font-size: 16px;
   border: 1px solid #ccc;
   border-radius: 4px;
   outline: none;

   &:focus {
      border-color: blue;
   }
`

const Error = styled.span`
   color: red;
   font-size: 14px;
   margin-top: 8px;
`

export { StyledFieldset, StyledForm, StyledInput, StyledLabel, Error }
