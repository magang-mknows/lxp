import { FC, Fragment, ReactElement } from "react";
import LandingHero from "../moleculs/LandingHero";
import LandingPartner from "../moleculs/LandingPartner";
import Navbar from "../moleculs/Navbar";

const LandingPage: FC = (): ReactElement => {
	return (
		<Fragment>
			<Navbar />
			<LandingHero />
			<LandingPartner />
		</Fragment>
	);
};

export default LandingPage;
