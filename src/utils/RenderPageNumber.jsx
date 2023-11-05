import { useContext } from "react";
import { Github } from "../App";


const RenderPageNumber = () => {
    const { userInfo, perPage, page, setPage } = useContext(Github)
    if (userInfo == null) return

        const handlePageChange = newPage => {
            setPage(newPage);
        }

    const totalPages = Math.ceil(userInfo.public_repos / perPage);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="page-numbers">
            {pageNumbers.map(number => (
                <button className={`${page === number ? 'bg-blue-500' : null} mr-10 border border-gray-500 px-4 py-2 hover:bg-sky-300 font-semibold`} key={number} onClick={() => handlePageChange(number)}>{number}</button>
            ))}
        </div>
    );
}

export default RenderPageNumber