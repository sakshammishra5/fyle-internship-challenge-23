import { useContext, useEffect } from "react"
import { Github } from "../App"
import { GET_USER_DETAILS, GITHUB_TOKEN } from "../constants/constants"
import { useNavigate } from "react-router-dom"



const useFetchUser = () => {
    const navigate = useNavigate()
    const { user, setSubmit, setUserInfo,submit } = useContext(Github)

    useEffect(() => {
        if (user !== '') {
            navigate('/mainpage')
            fetchData()
            console.log("data fetch hua");
        }
    }, [submit])


    const fetchData = async () => {
        const data = await fetch(GET_USER_DETAILS + user)
        const json = await data.json()
        console.log(json);
        setSubmit(false)
        setUserInfo(json)
    }

}

export default useFetchUser