import React, { createContext, useState } from 'react'
import Head from './components/Head'
import { Outlet } from 'react-router-dom'



const App = () => {
  const [userRepo, setUserRepo] = useState([])
  const [userInfo, setUserInfo] = useState(null)
  const [user, setUser] = useState('')
  const [submit, setSubmit] = useState(false)


  // User Repo
  const [Data, setData] = useState(null)
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true)
  const [perPage, setperPage] = useState(10)

  const Obj = {
    userRepo,
    setUserRepo,
    userInfo,
    setUserInfo,
    user,
    setUser,
    submit,
    setSubmit,
    Data,
    setData,
    page,
    setPage,
    loading,
    setLoading,
    perPage,
    setperPage
  }


  return (
    <Github.Provider value={Obj}>
      <div>
        <Head />
        <Outlet />
      </div>
    </Github.Provider>
  )
}

export default App
export const Github = createContext(null)