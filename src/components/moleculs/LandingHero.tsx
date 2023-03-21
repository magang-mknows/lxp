import { FC, ReactElement } from "react";
import Headline from "../atoms/Headline";

const LandingHero: FC = (): ReactElement => {
	return (
		<div className='flex items-center justify-center'>
			<Headline />
		</div>
	);
};

export default LandingHero;
