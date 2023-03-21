import { FC, ReactElement } from "react";
import LandingPartnerLogo from "../atoms/LandingPartnerLogo";
import LandingPartnerTitle from "../atoms/LandingPartnerTitle";

const LandingPartner: FC = (): ReactElement => {
	return (
		<div className='bg-version2-400 px-36 flex'>
			<LandingPartnerTitle />
			<LandingPartnerLogo />
		</div>
	);
};

export default LandingPartner;
