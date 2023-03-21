import { FC, Fragment, ReactElement } from "react";
import LandingHero from "../moleculs/LandingHero";
import Navbar from "../moleculs/Navbar";

const LandingPage: FC = (): ReactElement => {
	return (
		<Fragment>
			<Navbar />
			<LandingHero />
		</Fragment>
	);
};

export default LandingPage;
