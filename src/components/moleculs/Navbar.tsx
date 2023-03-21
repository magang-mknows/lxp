import React from "react";
import AskMenu from "../atoms/AskMenu";
import FeatureMenu from "../atoms/FeatureMenu";
import NavbarLogo from "../atoms/NavbarLogo";
import NavButton from "../atoms/Button";
import NavMenu from "../atoms/NavMenu";
import ThemeOption from "../atoms/ThemeOption";

const Navbar = () => {
	return (
		<nav className='bg-neautral-50 py-5 flex justify-between items-center'>
			<NavbarLogo />
			<div className='flex gap-4 items-center'>
				<NavMenu />
				<AskMenu />
				<FeatureMenu />
				<ThemeOption />
				<NavButton type='secondary' text='Masuk' />
				<NavButton type='primary' text='Daftar' />
			</div>
		</nav>
	);
};

export default Navbar;
