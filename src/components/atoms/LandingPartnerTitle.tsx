import { FC, Fragment, ReactElement } from "react";

const LandingPartnerTitle: FC = (): ReactElement => {
	return (
		<Fragment>
			<p className='text-sm text-version2-200 '>Our Partners</p>
			<h1 className='text-2xl font-bold text-neautral-50'>
				Learn with Our Partners
			</h1>
		</Fragment>
	);
};

export default LandingPartnerTitle;
