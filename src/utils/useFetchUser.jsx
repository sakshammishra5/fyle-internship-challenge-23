import { useContext, useEffect } from "react"
import { Github } from "../App"
import { GET_USER_DETAILS } from "../constants/constants"
import { useNavigate } from "react-router-dom"



const useFetchUser = () => {
    const navigate = useNavigate()
    const { user, setSubmit, setUserInfo,submit } = useContext(Github)

    useEffect(() => {
        if (user !== '') {
            navigate('/mainpage')
            fetchData()
        }
    }, [submit])


    const fetchData = async () => {
        const data = await fetch(GET_USER_DETAILS + user)
        const json = await data.json()
        setSubmit(false)
        setUserInfo(json)
    }

}

export default useFetchUser