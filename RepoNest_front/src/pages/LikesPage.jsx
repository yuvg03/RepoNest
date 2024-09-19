import { FaHeart } from "react-icons/fa";

const LikesPage = () => {
	return (
		<div className='relative overflow-x-auto shadow-md rounded-lg px-4'>
			<table className='w-full text-sm text-left rtl:text-right bg-glass overflow-hidden'>
				<tbody>
					<tr className='bg-glass border-b'>
						<th scope='row' className='flex items-center px-6 py-4 whitespace-nowrap '>
							<img
								className='w-10 h-10 rounded-full'
								src={"https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"}
								alt='Jese image'
							/>
							<div className='ps-3'>
								<div className='text-base font-semibold'>dasdas</div>
							</div>
						</th>
						<td className='px-6 py-4'>
							<div className='flex items-center'>
								<FaHeart size={22} className='text-red-500 mx-2' />
								Liked your profile
							</div>
						</td>
						<td className='px-6 py-4'>das</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
export default LikesPage