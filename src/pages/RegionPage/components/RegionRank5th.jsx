import level5 from '@/assets/images/regionLevel/regionLevel5.svg';

export default function RegionRank5th({ regionRank, rank }) {
	const { regionlName, regionScore, regionChangedScore, topContributorName } = regionRank;
	return (
		<div className="flex h-full  w-full  justify-between px-6 py-4 text-black19">
			<img src={level5} className=" my-auto flex h-20 w-1/3 " />
			<div className=" mx-4 my-auto w-1/2 flex-col">
				<div className=" flex  justify-between ">
					<p className="text-xl font-bold">
						{rank}위 {regionlName}
					</p>
					<div className=" flex flex-row">
						<p className="flex text-xl">{regionScore.toLocaleString()}점</p>
						<p className=" flex pl-2 pt-3 text-xs text-green-500">+{regionChangedScore.toLocaleString()}점</p>
					</div>
				</div>
				<hr className="my-2 w-full rounded-2xl border-b-4 border-primary" />
			</div>

			<div className=" my-auto ">
				<p className="  text-xs">
					MVP <span className=" text-primary">{topContributorName}</span>
				</p>
			</div>
		</div>
	);
}
