import { CommentIcon, GuestIcon, LogoutIcon } from 'assets/icons'
import { Container, StyledHeader, UserName } from './Header.styles'

import { Navigator } from "components"
import { useAuthContext } from 'hooks/useAuthContext'
import { useNavigate } from 'react-router-dom'

function Header() {
   const { user, isAuthenticated } = useAuthContext()

   const navigate = useNavigate()


   return (
      <StyledHeader>
         <CommentIcon onClick={() => navigate('/')} />
         <Navigator />
         <Container>
            <UserName>{user?.username || 'Guest'}</UserName>
            {isAuthenticated && user ? <div dangerouslySetInnerHTML={{ __html: user?.profile_image }} /> : <GuestIcon />}
         </Container>
      </StyledHeader>
   )
}


export default Header
