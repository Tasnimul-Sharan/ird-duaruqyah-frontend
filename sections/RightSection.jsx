"use client";
import { Slider } from "@/components";
import { useState } from "react";
import Image from "next/image";

const RightSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGModalOpen, setGIsModalOpen] = useState(false);
  const [isFontModalOpen, setFontIsModalOpen] = useState(false);
  const [isAppearance, setAppearance] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setGIsModalOpen(false);
    setFontIsModalOpen(false);
    setAppearance(false);
  };

  const generalModal = () => {
    setGIsModalOpen(!isGModalOpen);
    setIsModalOpen(false);
    setFontIsModalOpen(false);
    setAppearance(false);
  };

  const fontModal = () => {
    setFontIsModalOpen(!isFontModalOpen);
    setIsModalOpen(false);
    setGIsModalOpen(false);
    setAppearance(false);
  };

  const AppearanceModal = () => {
    setAppearance(!isAppearance);
    setIsModalOpen(false);
    setGIsModalOpen(false);
    setFontIsModalOpen(false);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center bg-white h-[80vh] overflow-auto rounded-2xl py-4 px-2 gap-3">
        <h3 className="text-[20px] font-bold text-[#393939]">Settings</h3>

        <div className="flex flex-col gap-2 font-normal text-[16px] text-[#868686]">
          <div>
            <div
              className={`set z-10 ${
                isModalOpen ? "text-primary border-l-4 border-l-primary" : null
              }`}
              onClick={toggleModal}
            >
              <div className="circular">
                <div>
                  <Image src="/lan.png" alt="play" width={24} height={24} />
                </div>
              </div>
              <p>Language Settings</p>
            </div>
            {isModalOpen && (
              <div>
                <div className="flex flex-row justify-evenly my-2 border-b border-r border-l  py-5 -mt-[6px] rounded-b-md z-0">
                  <p className="bg-primary text-white border py-1 px-4 rounded-md">
                    English
                  </p>
                  <p className="border py-1 px-4 rounded-md">Bangla</p>
                </div>
              </div>
            )}
          </div>

          <div>
            <div
              className={`set z-10 ${
                isGModalOpen ? "text-primary border-l-4 border-l-primary" : null
              }`}
              onClick={generalModal}
            >
              <div className="circular">
                <div>
                  <Image src="/gen.png" alt="play" width={24} height={24} />
                </div>
              </div>
              <p>General Settings</p>
            </div>
            {isGModalOpen && (
              <div>
                <div className="flex flex-col gap-3 justify-evenly my-2 border-b border-r border-l  py-5 -mt-[6px] rounded-b-md z-0">
                  <div className="general">
                    <label for="arabic">Show Arabic</label>
                    <input
                      type="checkbox"
                      name="arabic"
                      id="arabic"
                      className="checked"
                      defaultChecked
                    />
                  </div>

                  <div className="general">
                    <label for="arabic">Show Translation</label>
                    <input
                      type="checkbox"
                      name="arabic"
                      id="arabic"
                      className="checked"
                      defaultChecked
                    />
                  </div>

                  <div className="general">
                    <label for="arabic">Show Transliteration</label>
                    <input
                      type="checkbox"
                      name="arabic"
                      id="arabic"
                      className="checked"
                      defaultChecked
                    />
                  </div>

                  <div className="general">
                    <label for="arabic">Show Refference</label>
                    <input
                      type="checkbox"
                      name="arabic"
                      id="arabic"
                      className="checked"
                      defaultChecked
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div>
            <div
              className={`set z-10 ${
                isFontModalOpen
                  ? "text-primary border-l-4 border-l-primary"
                  : null
              }`}
              onClick={fontModal}
            >
              <div className="circular">
                <div>
                  <Image src="/fon.png" alt="play" width={24} height={24} />
                </div>
              </div>
              <p>Font Settings</p>
            </div>
            {isFontModalOpen && (
              <div>
                <div className="flex flex-col gap-3 justify-evenly my-2 border-b border-r border-l  py-5 -mt-[6px] rounded-b-md z-0">
                  <div className="font">
                    <p>Translation Font Size</p>
                    <Slider min={14} max={25} />
                  </div>

                  <div className="font mb-7">
                    <p>Select Arabic Script</p>
                    <div className="relative inline-block w-full mb-2">
                      <select
                        name="Font"
                        id="Font"
                        className="absolute w-full appearance-none bg-white border border-gray-300 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:border-primary focus:ring focus:ring-primary cursor-pointer"
                      >
                        <option value="volvo">Uthmani</option>
                        <option value="saab">Indopak</option>
                      </select>
                      <div className="absolute top-0 right-0  pt-3 flex items-center px-2 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="font mb-7">
                    <p>Arabic Font</p>
                    <div className="relative inline-block w-full mb-2">
                      <select
                        name="Font"
                        id="Font"
                        className="absolute w-full appearance-none bg-white border border-gray-300 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:border-primary focus:ring focus:ring-primary cursor-pointer"
                      >
                        <option value="volvo">KFGQ</option>
                        <option value="saab">Me Quran</option>
                        <option value="mercedes">Al Mushaf</option>
                        <option value="audi">Amiri Quran</option>
                      </select>
                      <div className="absolute top-0 right-0  pt-3 flex items-center px-2 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="font">
                    <p>Arabic Font Size</p>
                    <Slider min={18} max={40} />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div>
            <div
              className={`set z-10 ${
                isAppearance ? "text-primary border-l-4 border-l-primary" : null
              }`}
              onClick={AppearanceModal}
            >
              <div className="circular">
                <div>
                  <Image src="/fon.png" alt="play"width={24} height={24} />
                </div>
              </div>
              <p>Appearance Settings</p>
            </div>
            {isAppearance && (
              <div>
                <div className="flex flex-row justify-evenly my-2 border-b border-r border-l  py-5 -mt-[6px] rounded-b-md z-0">
                  <div className="general">
                    <label
                      className="inline-block pl-[0.15rem] hover:cursor-pointer"
                      htmlFor="flexSwitchCheckDefault"
                    >
                      Night Mode
                    </label>
                    <input
                      className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSection;


