import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import assets from './assets/assets'
import ChatContainer from './components/ChatContainer'
import RightSidebar from './components/RightSidebar'

const App = () => {
  return (
    <div className="
      bg-[url('./src/assets/bgImage.svg')]
      bg-contain
      bg-[80px]
    ">
      
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
      </Routes>
    </div>
  )
}

export default App
 