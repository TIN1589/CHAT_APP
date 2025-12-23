import React from 'react'
import SideBar from '../components/SideBar'
import ChatContainer from '../components/ChatContainer'
import RightSidebar from '../components/RightSidebar'

const HomePage = () => {
  return (
    <div className='min-h-screen bg-center bg-no-repeat bg-contain'>
      <div className='max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-8'>
        <div >
            <SideBar />
            <ChatContainer />
            <RightSidebar />
        </div>
      </div>
    </div>
  )
}

export default HomePage
