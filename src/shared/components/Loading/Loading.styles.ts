import styled, { keyframes } from 'styled-components'

const spin = keyframes`
    to { rotate: 360deg; }
`

export const StyledLoading = styled.div`
   min-height: 20rem;
   display: grid;
   place-items: center;
`

export const LoadingCircle = styled.div`
   color: #67727e;
   height: 10rem;
   aspect-ratio: 1;
   display: grid;
   place-items: center;
   font-size: 1.5rem;
   position: relative;

   &::before,
   &::after {
      content: '';
      position: absolute;
      height: 100%;
      aspect-ratio: 1;
      border-radius: 50%;
      border: 0.5rem solid transparent;
   }

   &::before {
      color: #eaecf1;
      border-top-color: currentColor;
      border-left-color: currentColor;
      animation: ${spin} 2s linear infinite;
      border-bottom: none;
   }

   &::after {
      border-top-color: currentColor;
      border-bottom: none;
      border-right: none;
      animation: ${spin} 1.5s linear infinite reverse;
   }
`
