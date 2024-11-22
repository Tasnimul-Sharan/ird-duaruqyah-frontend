import Image from "next/image";

const DuaList = ({ subcategories, duas, selectedCategory }) => {
  const playAudio = (audioUrl) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };
  return (
    <>
      {subcategories
        .filter((subcat) => subcat.cat_id === selectedCategory)
        .map((subcat) => (
          <div key={subcat.id}>
            <p className=" bg-white rounded-md px-4 py-3 font-medium text-base text-[#393939]">
              <span className=" text-primary">Section: </span>{" "}
              {subcat.subcat_name_en}
            </p>

            <div>
              {duas
                .filter((dua) => dua.subcat_id === subcat.subcat_id)
                .map((dua) => (
                  <div key={dua.id} className="my-4">
                    <div className="bg-white rounded-md px-4 py-2 flex flex-col gap-4">
                      <div className="text-primary font-semibold text-[16px] mt-2 flex flex-row gap-3">
                        <Image
                          src="/allah_1.png"
                          alt="allah_1"
                          width={30}
                          height={30}
                        />
                        {dua.dua_id}. {dua.dua_name_en}
                      </div>
                      <div className="font-normal text-[16px] text-[#393939]">{dua.top_en}</div>
                      <div className="text-right">{dua.dua_arabic}</div>

                      {dua.transliteration_en === null ? null : (
                        <div className="font-normal text-[16px] text-[#393939]">
                          {" "}
                          <strong>Transliteration:</strong>{" "}
                          <span className="italic">{dua.transliteration_en}</span>
                          
                        </div>
                      )}

                      {dua.translation_en === null ? null : (
                        <div className="font-normal text-[16px] text-[#393939]">
                          {" "}
                          <strong> Translation: </strong>
                          {dua.translation_en}
                        </div>
                      )}

                      <div className="mt-2 text-[16px] font-medium">
                        <p className="text-primary">Reference:</p>
                        <p className="text-[#393939]">{dua.refference_en}</p>
                      </div>

                      <div className="flex flex-row justify-between items-center">
                        {dua.audio === null ? null : (
                          <div
                            className="cursor-pointer"
                            onClick={() => playAudio(dua.audio)}
                          >
                            <Image
                              src="/play.png"
                              alt="play"
                              width={40}
                              height={40}
                            />
                          </div>
                        )}

                        <div className="flex-end ml-auto">
                          <div className="flex flex-row gap-3 items-center">
                            <div>
                              <Image
                                src="/copy.png"
                                alt="play"
                                width={24}
                                height={24}
                              />
                            </div>
                            <div>
                              <Image
                                src="/bookmark.png"
                                alt="play"
                                width={24}
                                height={24}
                              />
                            </div>
                            <div>
                              <Image
                                src="/light.png"
                                alt="play"
                                width={24}
                                height={24}
                              />
                            </div>
                            <div>
                              <Image
                                src="/share.png"
                                alt="play"
                               width={24}
                               height={24}
                              />
                            </div>
                            <div>
                              <Image
                                src="/report.png"
                                alt="play"
                               width={24}
                               height={24}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </>
  );
};

export default DuaList;
