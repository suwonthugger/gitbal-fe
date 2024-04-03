import Divider from '@/pages/MyPage/Divider';
import MainContainer from '@components/MainContainer';
import MyProfile from '@components/MyProfile';
import Shortcut from '@/pages/MyPage/Shortcut';
import level1 from '@/assets/images/userLevel/userLevel1.svg';
import level2 from '@/assets/images/userLevel/userLevel2.svg';
import { SmallProfileImage } from '../../components/ProfileImage/SmallProfileImage';

export default function MyPage() {
	return (
		<>
			<MainContainer>
				<div className="mb-14 mt-16 flex items-center justify-between">
					<MyProfile />
					<Shortcut />
				</div>
			</MainContainer>
			<Divider />
			<MainContainer>
				<div className="mt-12 flex flex-col gap-2">
					<h2 className="text-3xl font-extrabold">나의 레벨</h2>
					<p className="text-xl">int MyScore = commit + pull request + like</p>
					<p className="text-xl">10000 = 8000 + 1000 + 1000</p>
				</div>
				<div className="flex flex-col">
					<div className="relative mt-24 h-10 w-full rounded-lg bg-gray-200">
						<div className="relative h-full w-1/2 rounded-lg bg-primary">
							<div className="absolute -top-10 right-0">
								<SmallProfileImage />
							</div>
						</div>

						<div className="absolute -top-10 left-0">
							<img src={level1} className="h-8 w-8" />
						</div>

						<div className="absolute -top-10 right-0">
							<img src={level2} className="h-8 w-8" />
						</div>
					</div>
					<p className="mt-2 text-end text-sm font-bold text-grey69">NEXT RANK 52/100</p>
				</div>
				<div className="mt-8 flex flex-col">
					<h2 className="text-3xl font-extrabold">나와 함께 달리고 있는 사람들</h2>
					<div className="relative mt-24 h-10 w-full rounded-lg bg-gray-200">
						<div className="absolute h-full w-1/3 rounded-lg">
							<div className="absolute -top-10 right-0">
								<SmallProfileImage />
							</div>
						</div>
						<div className="absolute h-full w-1/2 rounded-lg bg-primary">
							<div className="absolute -top-10 right-0">
								<SmallProfileImage />
							</div>
						</div>
						<div className="absolute h-full w-9/12 rounded-lg ">
							<div className="absolute -top-10 right-0">
								<SmallProfileImage />
							</div>
						</div>
						<div className="absolute h-full w-3/12 rounded-lg ">
							<div className="absolute -top-10 right-0">
								<SmallProfileImage />
							</div>
						</div>
					</div>
				</div>
				<div className="mt-4 flex w-full items-center rounded-2xl border border-gray-200 px-4 py-4 text-black19 shadow-lg">
					<div className="flex w-1/2 flex-col">
						<div className="flex gap-2">
							<h2 className="text-xl font-extrabold">SCHOOL</h2>
							<span className="text-xl font-extrabold text-grey69">광운대학교</span>
						</div>
						<div className="flex items-center justify-center py-24">
							<h2 className="text-6xl font-extrabold">{2}등</h2>
						</div>
					</div>
					<div></div>
				</div>
			</MainContainer>
		</>
	);
}
