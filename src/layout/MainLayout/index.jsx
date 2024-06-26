import { Outlet } from 'react-router-dom';

import Footer from '@/layout/MainLayout/Footer';
import Header from '@/layout/MainLayout/Header';

export default function MainLayout() {
	return (
		<div className=" flex min-h-screen w-screen flex-col">
			<div className="sticky top-0 z-10 flex w-screen bg-white shadow-lg">
				<div className="mx-auto w-3/5">
					<Header />
				</div>
			</div>
			<div className="min-h-screen flex-grow">
				<Outlet />
			</div>
			<div className=" relative  mt-16 w-screen bg-greyD9">
				<div className=" container mx-auto w-3/5">
					<Footer />
				</div>
			</div>
		</div>
	);
}
