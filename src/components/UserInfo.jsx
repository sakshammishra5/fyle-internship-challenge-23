import React, { useContext } from 'react'
import { Github } from '../App'
import UserSkeleton from './UserSkeleton';

const UserInfo = () => {

    const { userInfo } = useContext(Github)
    if (userInfo == null) return <UserSkeleton />;
    if(userInfo.message) return <h1 className='text-center'>{userInfo.message}</h1>
    return (
        <div className='ml-20'>
            {/* <h1 className='font-mono ml-10 mb-7'>GitHub User</h1> */}
            <div className='flex items-center'>
                <div>
                    <img className='w-44 rounded-full shadow-xl' src={userInfo.avatar_url} alt="" />
                </div>
                <div className='ml-16 font-mono text-xl'>
                    <p className='italic'>{userInfo.name}</p>
                    <p>{userInfo.bio}</p>
                    <span>{userInfo.location ? `📍 ${userInfo.location}` : null}</span>
                    <span>{userInfo.twitter_username}</span>
                </div>
            </div>

            <div className='mt-4 font-serif font-semibold text-xl text-blue-400'>
                {userInfo.html_url}
            </div>

        </div>
    )
}

export default UserInfo