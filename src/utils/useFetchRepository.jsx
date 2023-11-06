import { useContext, useEffect } from "react";
import { Github } from "../App";
import { GITHUB_TOKEN } from "../constants/constants";


const useFetchRepository = () => {
    const { submit, page, user, setLoading, setData, perPage } = useContext(Github)

    useEffect(() => {
        if (submit || page && user !== "") {
            setLoading(true)
            fetchUserRepo()
        }
    }, [submit, page])

    const fetchUserRepo = async () => {
        const apiUrl = `https://api.github.com/users/${user}/repos?page=${page}&per_page=${perPage}`;
        const data = await fetch(apiUrl)
        const json = await data.json()
        await fetchData(json)
    }

    const fetchData = async (Repository) => {
        const newData = [];

        for (const item of Repository) {
            try {
                const response = await fetch(item.languages_url);
                const coding_language = await response.json()
                const codingLanguageArray = Object.keys(coding_language).map(language => ({
                    name: language,
                    value: coding_language[language]
                }));
                newData.push({ ...item, coding_language: codingLanguageArray });
            } catch (error) {
                // Handle errors here
                console.error(`Error fetching data for ${item.url}`, error);
                newData.push(item);
            }
        }

        setData(newData);
        setLoading(false)
    };

}

export default useFetchRepository