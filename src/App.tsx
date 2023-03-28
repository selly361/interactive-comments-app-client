import { HomePage, LoginPage, RegisterPage } from 'pages'
import { Route, Routes } from 'react-router-dom'

import { Wrapper } from 'components'

function App() {
   return (
      <Wrapper>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
         </Routes>
      </Wrapper>
   )
}

export default App
