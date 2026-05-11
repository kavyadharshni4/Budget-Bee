import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Landing from './Pages/Landing'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Dashboard from './Pages/Dashboard'
import AddExpense from './Pages/AddExpense'
import History from './Pages/History'
import Profile from './Pages/Profile'
import Navbar from './Components/Navbar'

const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Landing />}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/dashboard' element={<Dashboard/>}></Route>
            <Route path='/add' element={<AddExpense/>}></Route>
            <Route path='/history' element={<History />}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
        </Routes>

    </div>
  )
}

export default AppRoutes