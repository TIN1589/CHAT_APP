import React from 'react'
import assets from '../assets/assets'
import { messagesDummyData } from '../assets/assets'
import { userDummyData } from '../assets/assets'

const ChatContainer = ({ selectedUser, setSelectedUser }) => {
  return selectedUser ? (
    <div className='h-full relative backdrop-blur-lg flex flex-col'>
      
      {/* HEADER */}
      <div className='flex items-center gap-3 py-3 mx-4 border-b border-stone-500'>
        {/* AVATAR */}
        <img 
          src={selectedUser.profilePic || assets.avatar_icon} 
          alt='' 
          className='w-8 h-8 rounded-full' 
        />
        
        {/* TÊN + TRẠNG THÁI */}
        <p className='flex-1 text-lg text-white flex items-center gap-2'>
          {selectedUser.fullName}
          <span className='w-2 h-2 rounded-full bg-green-500'></span>
        </p>

        {/* ICONS (Back & Help) */}
        <div className='flex items-center gap-3'>
          <img 
            onClick={() => setSelectedUser(null)} 
            src={assets.arrow_icon} 
            alt='' 
            className='md:hidden max-w-7 cursor-pointer' 
          />
          <img 
            src={assets.help_icon} 
            alt='' 
            className='max-md:hidden max-w-5' 
          />
        </div>
      </div>

      {/* NỘI DUNG CHAT (Body) */}
      <div className='flex flex-col h-[calc(100%-120px)] overflow-y-scroll p-3 pb-6'>
        {messagesDummyData.map((msg, index) => (
          <div 
            key={index} 
            className={`flex items-end gap-2 justify-end ${
              msg.senderId !== '680f50e4f10f3cd28382ecf9' && 'flex-row-reverse'
            }`}
          >
            {/* Tin nhắn Hình ảnh hoặc Văn bản */}
            {msg.image ? (
              <img
                src={msg.image}
                alt=""
                className='max-w-50 sm:max-w-xs border border-gray-700 rounded-lg overflow-hidden mb-8'
              />
            ) : (
              <p className={`p-2 max-w-50 sm:max-w-xs md:text-sm font-light rounded-lg mb-8 break-all bg-violet-500/30 text-white ${
                msg.senderId === '680f50e4f10f3cd28382ecf9' ? 'rounded-br-none' : ''
              }`}>
                {msg.text}
              </p>
            )}

            {/* Avatar nhỏ + Thời gian bên cạnh tin nhắn */}
            <div className='text-center text-xs'>
              <img 
                src={
                  userDummyData.find(u => u._id === msg.senderId)?.profilePic || assets.avatar_icon
                }
                alt="" 
                className='w-7 rounded-full mb-1'
              />
              <p className='text-gray-500'>{msg.createdAt}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  ) : (
    /* MÀN HÌNH CHỜ  */
    <div className='flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 h-full max-md:hidden'>
      <img src={assets.logo_icon} className='max-w-16' alt='' />
      <p className='text-lg font-medium text-white'>Nhắn tin mọi lúc, mọi nơi</p>
    </div>
  )
}

export default ChatContainer