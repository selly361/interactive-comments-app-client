import AuthContextProvider, { AuthContext } from 'contexts/AuthContext'
import React, { Fragment } from 'react'

import { ErrorBoundary } from 'components'
import { GlobalStyles } from 'global/GlobalStyles'
import { IProps } from './types'

function Wrapper({ children }: IProps) {
   return (
      <Fragment>
         <GlobalStyles />
         <ErrorBoundary>
            <AuthContextProvider>{children}</AuthContextProvider>
         </ErrorBoundary>
      </Fragment>
   )
}

export default Wrapper
