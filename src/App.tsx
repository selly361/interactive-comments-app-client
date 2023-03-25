import AuthContextProvider, { AuthContext } from 'contexts/AuthContext'
import React, { Fragment, useContext } from 'react'

import { GlobalStyles } from 'global/index.GlobalStyles'

function App() {
   return (
      <Fragment>
         <GlobalStyles />
         <AuthContextProvider>
            <Test />
         </AuthContextProvider>
      </Fragment>
   )
}

function Test() {
   const { login, signup, user, logout } = useContext(AuthContext)

   return (
      <div>
         <button onClick={() => login('seikou615@gmail.com', 'sillah123')}>
            <h1>LOGIN</h1>
         </button>
         <br />
         <button onClick={() => signup('seikou615@gmail.com', 'aimerno', 'sillah123')}>
            <h1>REGISTER</h1>
         </button>
         <button onClick={() => logout()}>
            <h1>LOGOUT</h1>
         </button>
         <div>{JSON.stringify(user)}</div>
         <div dangerouslySetInnerHTML={{ __html: user?.profile_image || '' }} />
      </div>
   )
}

export default App
