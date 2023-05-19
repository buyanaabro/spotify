import Link from "next/link";

const HomeCard = ({ image, title, subTitle }) => (
  <Link href="/Signup">
    <div className="bg-[#111111] p-4 rounded-md m-2 hover:bg-[#252525] cursor-pointer">
      <img className="rounded-md" src={image} alt="" />
      <div className="text-white pt-4 font-semibold text-[17px]">{title}</div>
      <div className="text-gray-400 pt-1 pb-3 text-[14px]">{subTitle}</div>
    </div>
  </Link>
);

export default HomeCard;