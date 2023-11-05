import React, { useContext} from 'react'
import { Github } from '../App'
import RepoCard from './RepoCard'
import RepoSkeleton from './RepoSkeleton'
import useFetchRepository from '../utils/useFetchRepository'
import RenderPageNumber from '../utils/RenderPageNumber'
import RangeInput from './RangeInput'


const UserRepo = () => {
    const {userInfo,Data, page, setPage, loading,perPage,setperPage} = useContext(Github)

    useFetchRepository()
   console.log(userInfo);
    
    if (loading) return <RepoSkeleton />

    return (
        <> 
            <div className='flex flex-wrap justify-center'>
                {Data !== null && Data.map((item) =>
                    <RepoCard
                        key={item.id}
                        name={item.name}
                        description={item.description}
                        coding_language={item.coding_language}
                    />)}
            </div>
            {Data !== null && <div className="flex justify-center [&>*]:mr-10 my-10 mb-20 ">
                <button className='border border-gray-300 px-4 py-1 rounded-full font-semibold hover:bg-sky-300' onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
                    Previous
                </button>
                {Data !== null && <RenderPageNumber/>}
                <button className='border border-gray-300 px-4 py-1 rounded-full font-semibold hover:bg-sky-300' onClick={() => handlePageChange(page + 1)}>Next</button>
            </div>}
        </>
    )
}

export default UserRepo