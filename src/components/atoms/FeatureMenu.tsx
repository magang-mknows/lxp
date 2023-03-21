import { FC, ReactElement } from "react";
import { BiCategoryAlt } from "react-icons/bi";

const FeatureMenu: FC = (): ReactElement => {
	return (
		<div className='bg-neautral-100 w-9 h-9 flex items-center justify-center rounded-md shadow-sm'>
			<BiCategoryAlt className='text-[20px]' />
		</div>
	);
};

export default FeatureMenu;
