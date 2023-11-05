import { useContext } from 'react'
import { Github } from '../App'
import useFetchUser from '../utils/useFetchUser'
import useFetchRepository from '../utils/useFetchRepository'

const Head = () => {
  const { user, setUser, setSubmit,setPage } = useContext(Github)
  
  const inputChangeHandler = (event) => {
    setUser(event.target.value)
  }
  
  // const formSubmitHandler = (event) => {
  //   event.preventDefault()
  //   setPage(10)
  //   setSubmit(true)
  // }
  
  useFetchUser()
  useFetchRepository()
  const onclickHandler=()=>{
    setPage(1)
    setSubmit((prev)=>!prev)
  }

  return (
    <div className='flex justify-between  bg-sky-200 py-10 px-20'>
      <h1 className='ml-10 font-bold text-2xl'>Search Github Repository</h1>
      <div className='mr-10' onSubmit={(e) => formSubmitHandler(e)}>
        <input
          type="text"
          placeholder='🔍 Search Repos'
          className='mx-2 mr-0 px-2 py-2 rounded-sm border border-gray-800 border-r-0 rounded-r-none'
          value={user}
          onChange={(e) => inputChangeHandler(e)}
        />

        <button className='bg-white py-2 px-2 border border-gray-800 rounded-r-sm hover:bg-slate-200' onClick={onclickHandler}>🔍</button>
      </div>
    </div>
  )
}

export default Head