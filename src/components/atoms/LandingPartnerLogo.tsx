import Image from "next/image";
import { FC, ReactElement } from "react";

const LandingPartnerLogo: FC = (): ReactElement => {
	return (
		<div>
			<Image
				src={"/assets/landing/brand1.svg"}
				alt='dashboard-view'
				className=''
				height={100}
				width={100}
				loading='eager'
			/>
		</div>
	);
};

export default LandingPartnerLogo;
