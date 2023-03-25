import styled, { css } from 'styled-components'

const commonStyles = css`
   transition: 1s ease background;
   display: grid;
   place-items: center;
   color: white;
   font-weight: 500;
   font-size: 16px;
   line-height: 24px;
   text-align: center;
`

export const PrimaryButton = styled.button`
   height: 48px;
   width: 104px;
   border-radius: 8px;
   background: #5357b6;
   ${commonStyles}

   &:hover {
      background: #c5c6ef;
   }
`

export const SecondaryButton = styled.button`
   height: 48px;
   width: 161px;
   border-radius: 8px;
   ${commonStyles}
   background: #67727E;
   transition: 1s ease filter;

   &:hover {
      filter: brightness(1.1);
   }
`

export const TertiaryButton = styled.button`
   height: 48px;
   width: 161px;
   border-radius: 8px;
   background: #ed6368;
   ${commonStyles}
   transition: 1s ease filter;

   &:hover {
      filter: brightness(1.1);
   }
`
