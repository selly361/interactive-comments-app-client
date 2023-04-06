import { CommentIcon, GuestIcon } from 'assets/icons'

import React from 'react'
import { StyledHeader } from './Header.styles'
import { useAuthContext } from 'hooks/useAuthContext'

function Header() {

    const { user, isAuthenticated } = useAuthContext()
    
  return (
    <StyledHeader>
        <CommentIcon />
        {(isAuthenticated && user) ? <div dangerouslySetInnerHTML={{ __html: user?.profile_image }} /> : <GuestIcon />}
    </StyledHeader>
  )
}

export default Header