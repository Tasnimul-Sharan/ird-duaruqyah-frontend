"use client";
import Image from "next/image";
import { useState } from "react";

import { RightSection, TopSection } from "@/sections";

const MobNav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="flex flex-row my-2 items-center justify-between">
        <div className=" text-black font-bold">Duas Page</div>
        <Image
          src="/fon.png"
          alt="setting"
          height={30}
          width={30}
          onClick={toggleModal}
          className=" relative"
        />
      </div>
      <div>
        {isModalOpen && (
          <div className="modal" onClick={toggleModal}>
            <div className="absolute top-7 right-4">
              <RightSection />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobNav;
