import styled from 'styled-components'

export const NavButton = styled.div`
   display: flex;
   align-items: center;
   gap: 5px;
   background: transparent;
   transition: 1s ease filter;

   &:hover {
      filter: brightness(0.9);
   }
`
export const StyledNav = styled.button`
   background: transparent;
   font-size: 20px;
   font-weight: bold;
   color: white;
`

export const NavContainer = styled.nav`
   display: flex;
   align-items: center;
   justify-content: space-around;
   height: 80%;
   width: max-content;
   gap: 10px;
`

export const Divider = styled.div`
   height: 60%;
   width: 1px;
   background-color: #e9ebf0;
`
