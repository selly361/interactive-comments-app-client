import AuthContextProvider, { AuthContext } from 'contexts/AuthContext'
import { ErrorBoundary, Header } from 'components'
import React, { Fragment } from 'react'

import { GlobalStyles } from 'global/GlobalStyles'
import { IProps } from './types'

function Wrapper({ children }: IProps) {
   return (
      <Fragment>
         <GlobalStyles />
         <ErrorBoundary>
            <AuthContextProvider>
               <Header />
               {children}
               </AuthContextProvider>
         </ErrorBoundary>
      </Fragment>
   )
}

export default Wrapper
