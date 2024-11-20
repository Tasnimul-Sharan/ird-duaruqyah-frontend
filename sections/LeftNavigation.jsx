import Image from "next/image";

const LeftNavigation = () => {
  return (
    <div className="flex flex-col bg-white w-full h-[90vh] justify-between items-center p-4 rounded-2xl">
      <div className=" h-20">
        <Image src="/logo.png" alt="play" width={80} height={80} />
      </div>
      <div>
        <ul className="flex flex-col gap-6">
          <li className="circular">
            <Image src="/home.png" alt="play" width={20} height={20} />
          </li>
          <li className="circular">
            <Image src="/fon.png" alt="play" width={20} height={20} />
          </li>
          <li className="circular">
            <Image src="/light.png" alt="play" width={20} height={20} />
          </li>
          <li className="circular">
            <Image src="/bookmark.png" alt="play" width={20} height={20} />
          </li>
          <li className="circular">
            <Image src="/ruqyah.png" alt="play" width={20} height={20} />
          </li>
          <li className="circular">
            <Image src="/dua-info.png" alt="play" width={20} height={20} />
          </li>
          <li className="circular">
            <Image src="/books.png" alt="play" width={20} height={20} />
          </li>
        </ul>
      </div>
      <div>
        <Image src="/donate.png" alt="play" width={80} height={80} />
      </div>
    </div>
  );
};

export default LeftNavigation;
