import React from 'react'

import { FaCodeBranch, FaCopy, FaRegStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { formatDate } from '../utils/functions';
import toast from 'react-hot-toast';

const Repo = ({repo}) => {
	const releaseDate = formatDate(repo.created_at)
	const handleCopy = async (repo)=>{
		try {
			await navigator.clipboard.writeText(repo.clone_url)
			toast.success("Repo URL Copied!")
		} catch (error) {
			toast.error("Failed to copy URL")
		}
	}
	return (
		<li className='mb-10 ms-7'>
			<span
				className='absolute flex items-center justify-center w-6 h-6 bg-blue-100
			rounded-full -start-3 ring-8 ring-white'
			>
				<FaCodeBranch className='w-5 h-5 text-black' />
			</span>
			<div className='flex gap-2 items-center flex-wrap'>
				<a
					href={"https://github.com/burakorkmez/mern-chat-app"}
					target='_blank'
					rel='noreferrer'
					className='flex items-center gap-2 text-lg font-semibold'
				>
					{repo.name}
				</a>
				<span
					className='bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5
					py-0.5 rounded-full flex items-center gap-1'
				>
					<FaRegStar /> {repo.stargazers_count}
				</span>
				<span
					className='bg-purple-100 text-purple-800 text-xs font-medium
					 px-2.5 py-0.5 rounded-full flex items-center gap-1'
				>
					<FaCodeFork /> {repo.forks_count}
				</span>
				<span
					onClick={() => handleCopy(repo)}
					className='cursor-pointer bg-green-100 text-green-800 text-xs
					font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1'
				>
					<FaCopy /> Copy
				</span>
			</div>

			<time
				className='block my-1 text-xs font-normal leading-none
			 text-gray-400'
			>
				Released on {releaseDate}
			</time>
			<p className='mb-4 text-base font-normal text-gray-500'>
				{repo.description ? repo.description.slice(0,500) : "No Description Provided"}
			</p>
			<img src={"/javascript.svg"} alt= {repo.language} className='h-8' />
		</li>
	);
};

export default Repo