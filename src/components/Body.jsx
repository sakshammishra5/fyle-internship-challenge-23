import  {  useContext } from 'react'
import UserInfo from './UserInfo'
import UserRepo from './UserRepo'
import RangeInput from './RangeInput'
import { Github } from '../App'



const Body = () => {
  const { user } = useContext(Github)
  return (
    <>
      {user !== "" && <RangeInput />}
      <UserInfo />
      <UserRepo />

    </>
  )
}

export default Body