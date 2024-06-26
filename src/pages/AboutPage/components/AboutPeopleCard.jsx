import logo from '@/assets/images/userLevel/userLevel3.svg';
import openInNew from '@/assets/images/icon/open_in_new.svg';
import { useState } from 'react';
import testImg4 from '@/assets/images/testImg/aboutTestImg4.jpeg';

export default function AboutPeopleCard({ name, part, nickName, gitId, blaBla }) {
	const CHANGE_COUNT = 5;

	const [clickCount, setClickCount] = useState(0);

	const handleOpenGitHubWindow = () => {
		const url = `https://github.com/${gitId}`;
		window.open(url, '_blank');
	};

	const handleCardClick = () => {
		setClickCount((prev) => {
			const newCount = prev < CHANGE_COUNT ? prev + 1 : 1;
			return newCount;
		});
	};

	return (
		<div className="w-full" onClick={handleCardClick}>
			{clickCount >= CHANGE_COUNT ? (
				<div className="w-full rounded-xl bg-white p-4 text-black19 shadow-xl">
					<div className=" m-auto flex flex-row justify-between ">
						<img src={testImg4} alt="testImg" className="rounded-xl shadow-xl" />
					</div>
				</div>
			) : (
				<div className="w-full rounded-xl bg-white p-8 text-black19 shadow-xl">
					<div className="mb-4 flex flex-row justify-between">
						<div className=" felx-row flex">
							<p className="text-xl">{name}</p>
							<p className="my-auto ml-4  text-sm text-grey69">{part}</p>
						</div>

						<img src={logo} className="h-7 w-7" alt="logo" />
					</div>
					<div className="mb-3 flex flex-row text-sm">
						<p className=" font-bold text-primary">{nickName}</p>
						<button onClick={handleOpenGitHubWindow} className=" flex flex-row">
							<p className=" ml-4 font-normal">{gitId}</p>
							<img src={openInNew} className="my-auto ml-2 mr-1 h-4 w-4 " alt="logo" />
							<p className="font-normal">GitHub</p>
						</button>
					</div>
					<p className="mb-3 text-sm text-grey69">광운대학교 정보융합학부</p>
					<p className="text-sm text-grey69">{blaBla}</p>
				</div>
			)}
		</div>
	);
}
