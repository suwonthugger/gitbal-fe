import level4 from '@/assets/images/regionLevel/regionLevel4.svg';

export default function RegionRank1st({ regionRank, rank }) {
	const { regionlName, regionScore, regionChangedScore, topContributorName } = regionRank;

	return (
		<div className="h-full w-full  px-6 py-7 text-black19">
			<div className=" flex justify-between">
				<img src={level4} className=" h-20 w-20" />
				<div className="flex flex-col justify-end text-end">
					<p className="text-3xl font-bold">
						{rank}위 {regionlName}
					</p>
					<p className=" mt-2 text-lg text-primary">최고급 호텔</p>
				</div>
			</div>
			<div className="mt-6 flex flex-row  align-bottom">
				<p className="flex text-xl">{regionScore.toLocaleString()}점</p>
				<p className=" flex pl-2 pt-3 text-xs text-green-500">+{regionChangedScore.toLocaleString()}점</p>
			</div>
			<hr className="my-2 w-full rounded-2xl border-b-4 border-primary" />
			<p className=" text-xs">
				MVP <span className=" text-primary">{topContributorName}</span>
			</p>
		</div>
	);
}
