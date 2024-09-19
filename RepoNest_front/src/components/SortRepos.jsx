import { IoStarSharp } from "react-icons/io5";
import { FaCodeFork } from "react-icons/fa6";
import { IoIosTimer } from "react-icons/io";
const SortRepos = ({onSort}) => {
	return (
		<div className='mb-2 flex justify-center lg:justify-end'>
			<button 
                type="button" 
                class="py-2.5 px-3 me-2 mb-2 text-sm font-medium text-center inline-flex items-center
                 text-white bg-glass rounded-lg hover:bg-blue-800 focus:ring-4 
                 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700
                 dark:focus:ring-blue-800"
                 onClick={()=>onSort("recent")}
            >
                <IoIosTimer size = {20} />
                <span className="ml-2">
                    Most Recent
                </span>
            </button>
			<button 
                type="button" 
                class="py-2.5 px-3 me-2 mb-2 text-sm font-medium text-center inline-flex items-center
                 text-white bg-glass rounded-lg hover:bg-blue-800 focus:ring-4 
                 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700
                 dark:focus:ring-blue-800"
                 onClick={()=>onSort("stars")}
            >
                <IoStarSharp size = {20} />
                <span className="ml-2">
                    Most Stars
                </span>
            </button>
			<button 
                type="button" 
                class="py-2.5 px-3 me-2 mb-2 text-sm font-medium text-center inline-flex items-center
                 text-white bg-glass rounded-lg hover:bg-blue-800 focus:ring-4 
                 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700
                 dark:focus:ring-blue-800"
                 onClick={()=>onSort("forks")}
            >
                <FaCodeFork size = {15} />
                <span className="ml-2">
                    Most Forks
                </span>
            </button>
		</div>
	);
};

export default SortRepos