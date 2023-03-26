import React, { useContext, useEffect } from 'react'

import { AuthContext } from 'contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

function WithAuthorization(WrappedComponent: React.ComponentType) {
   const WithAuthorizationWrapper = (props: any) => {
      const { user, isAuthenticated } = useContext(AuthContext)
      const navigate = useNavigate()

      useEffect(() => {
         if (!isAuthenticated) {
            navigate('/login')
         }
      }, [isAuthenticated])

      if (isAuthenticated && user) {
         return <WrappedComponent {...props} />
      }

      return null
   }

   return WithAuthorizationWrapper
}

export default WithAuthorization
