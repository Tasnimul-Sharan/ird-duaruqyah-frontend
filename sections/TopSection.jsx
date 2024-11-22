"use client";
import Image from "next/image";
import { useState } from "react";

const TopSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex items-center justify-between w-full py-4 px-6">
      <h1 className="font-semibold text-2xl">Dua Page</h1>

      <div className="relative w-[371px] h-[52px] flex-shrink-0  lg:ml-[31rem]">
        <input
          type="text" 
          placeholder="Search by Dua Name"
          className="w-full h-full pl-4 pr-10 border border-gray-300 rounded-md focus:outline-none"
        />
        <button className="absolute top-1/2 right-2 transform -translate-y-1/2">
          <Image
            src="/search-icon.png"
            alt="Search Icon"
            width={54}
            height={44}
            className="rounded-md"
          />
        </button>
      </div>

      {/* User Icon Section */}
      <div className="relative flex items-center">
        <div onClick={toggleModal} className="cursor-pointer">
          <Image
            src="/user.png"
            alt="User Icon"
            width={67.5}
            height={45}
            className="rounded-full"
          />
        </div>
        {isModalOpen && (
          <div className="absolute top-12 right-0 w-48 bg-white shadow-lg rounded-md z-10">
            <ul className="flex flex-col p-4 gap-3">
              <li className="flex items-center gap-2 text-sm">
                <Image src="/share.png" alt="icon" width={16} height={16} />
                Support Us
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Image src="/report.png" alt="icon" width={16} height={16} />
                Download Dua App
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Image src="/share.png" alt="icon" width={16} height={16} />
                Privacy Policy
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Image src="/light.png" alt="icon" width={16} height={16} />
                Thanks & Credits
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Image src="/fon.png" alt="icon" width={16} height={16} />
                About Us
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Image src="/bookmark.png" alt="icon" width={16} height={16} />
                Copy Writing
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Image src="/books.png" alt="icon" width={16} height={16} />
                Our Other Projects
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopSection;
