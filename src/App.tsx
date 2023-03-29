import { Anonymous, Wrapper } from 'components'
import { HomePage, LoginPage, RegisterPage } from 'pages'
import { Route, Routes } from 'react-router-dom'

function App() {
   return (
      <Wrapper>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route element={<Anonymous />}>
               <Route path="/register" element={<RegisterPage />} />
               <Route path="/login" element={<LoginPage />} />
            </Route>
         </Routes>
      </Wrapper>
   )
}

export default App
