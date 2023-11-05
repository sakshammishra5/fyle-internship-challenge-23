import React from 'react'

const RepoCard = ({ name, description, coding_language }) => {

    return (
        <>
            <div className='w-96 h-36 border border-black mx-5 my-2 shadow-lg'>
                <div className='ml-6 mt-4 [&>*]:mb-1'>
                    <p className='font-semibold text-lg text-blue-500'>{name}</p>
                    <p className='font-semibold line-clamp-1'>{description !== null ? description : "Not Mentioned"}</p>
                    <p className='mt-2 mr-3 line-clamp-1'>{coding_language.map((item, i) => <span key={i} className='bg-cyan-200 px-2 py-4 rounded-full mr-2'>{item.name}</span>)}</p>
                </div>
            </div>
        </>
    )
}

export default RepoCard