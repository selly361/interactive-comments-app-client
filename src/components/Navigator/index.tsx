import { Divider, NavButton, NavContainer, StyledNav } from './Navigator.styles'

import { LogoutIcon } from 'assets/icons'
import { useAuthContext } from 'hooks/useAuthContext'
import { useNavigate } from 'react-router-dom'

function Navigator() {
   const { isAuthenticated, logout } = useAuthContext()

   const navigate = useNavigate()

   return (
      <NavContainer>
         <NavButton onClick={() => (!isAuthenticated ? navigate('/login') : logout())}>
            <StyledNav>{isAuthenticated ? 'Logout' : 'Login'}</StyledNav>
            {isAuthenticated ? <LogoutIcon /> : null}
         </NavButton>
         {!isAuthenticated ? (
            <>
               <Divider />
               <NavButton onClick={() => navigate('/register')}>
                  <StyledNav>Register</StyledNav>
               </NavButton>
            </>
         ) : null}
      </NavContainer>
   )
}

export default Navigator;