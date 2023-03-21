import Image from "next/image";
import { FC, ReactElement } from "react";
import Button from "../atoms/Button";
import Headline from "../atoms/Headline";
import HeadlineDesc from "../atoms/HeadlineDesc";

const LandingHero: FC = (): ReactElement => {
	return (
		<div
			className='flex flex-col items-center py-24 h-screen bg-no-repeat bg-cover'
			style={{
				backgroundImage: `url(/assets/landing/heroImage.svg)`,
			}}>
			<Headline />
			<HeadlineDesc />
			<Button type='primary' text='Get a demo' size='w-28' />
			<div>
				<Image
					src={"/assets/landing/dashboardImage.svg"}
					alt='dashboard-view'
					className='h-11'
					width={100}
					height={60}
					loading='eager'
					quality={40}
				/>
			</div>
		</div>
	);
};

export default LandingHero;
