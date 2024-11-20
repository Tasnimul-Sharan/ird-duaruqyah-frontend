"use client";
import Image from "next/image";
import { useState } from "react";

const TopSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex flex-row items-center w-full">
      <div className="flex flex-row justify-between items-center h-16 w-full px-2">
        <h1 className="font-semibold">Dua Page</h1>
        <div className="relative w-2/6">
          <input
            type="text"
            placeholder="Search by Dua Name "
            className="w-full py-3 px-4 border border-gray-300 rounded-md focus:outline-none"
          />
          <button className="absolute right-0 top-0 mt-2 mr-1 bg-back py-2 px-4 rounded-md">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 30 30"
            >
              <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="w-auto flex flex-row justify-end pr-2">
        <div className=" relative" onClick={toggleModal}>
          <Image src="/user.png" alt="play" width={50} height={50} />
        </div>
        <div>
          {isModalOpen && (
            <div className="modal">
              <div className="absolute bg-white rounded-xl top-20 right-16 min-w-28 py-3 px-4">
                <ul className="flex flex-col gap-4 p-4">
                  <li className="modal">
                    <Image src="/share.png" alt="icon" width={16} height={16} />{" "}
                    Support Us
                  </li>
                  <li className="modal">
                    <Image
                      src="/report.png"
                      alt="icon"
                      width={16}
                      height={16}
                    />{" "}
                    Download Dua App
                  </li>
                  <li className="modal">
                    <Image src="/share.png" alt="icon" width={16} height={16} />{" "}
                    Privacy Policy
                  </li>
                  <li className="modal">
                    <Image src="/light.png" alt="icon" width={16} height={16} />{" "}
                    Thanks & Credits
                  </li>
                  <li className="modal">
                    <Image src="/fon.png" alt="icon" width={16} height={16} />{" "}
                    About Us
                  </li>
                  <li className="modal">
                    <Image
                      src="/bookmark.png"
                      alt="icon"
                      width={16}
                      height={16}
                    />{" "}
                    Copy Writing
                  </li>
                  <li className="modal">
                    <Image src="/books.png" alt="icon" width={16} height={16} />{" "}
                    Our Other Projects
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopSection;
