import Image from "next/image";
import { FC, ReactElement } from "react";

const HeadlinePoster: FC = (): ReactElement => {
	return (
		<div className='mt-20 relative bottom-0'>
			<Image
				src={"/assets/landing/dashboardImage.svg"}
				alt='dashboard-view'
				className=''
				height={1000}
				width={1000}
				loading='eager'
			/>
			<Image
				src={"/assets/landing/eventImage.svg"}
				alt='event-view'
				className='absolute bottom-10 right-10'
				height={300}
				width={300}
				loading='eager'
			/>
		</div>
	);
};

export default HeadlinePoster;
