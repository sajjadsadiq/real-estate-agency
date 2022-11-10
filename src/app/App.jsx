import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ForgotPassword from '../pages/ForgotPassword'
import Home from '../pages/Home'
import Offers from '../pages/Offers'
import SingIn from '../pages/SingIn'
import SingUp from '../pages/SingUp'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/offers" element={<Offers/>}/>
        <Route path="/singin" element={<SingIn/>}/>
        <Route path="/singup" element={<SingUp/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
      </Routes>
    </>
  )
}

export default App