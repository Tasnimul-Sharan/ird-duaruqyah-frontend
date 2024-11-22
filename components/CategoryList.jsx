import Image from "next/image";

const CategoryList = ({
  categories,
  subcategories,
  duas,
  selectedCategory,
  selectedSubCategory,
  handleClick,
  handleSubClick,
  selectedRef,
}) => {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id} className="relative my-2">
          <div
            className={`flex flex-row gap-2 justify-start items-center py-3 px-2 rounded-xl ${
              selectedCategory === category.cat_id
                ? "bg-[#E8F0F5]"
                : "hover:bg-[#E8F0F5]"
            }`}
            onClick={() => handleClick(category.cat_id)}
            ref={selectedCategory === category.cat_id ? selectedRef : null}
          >
            <div className="bg-ascent py-2 px-4 rounded-md">
              <Image
                src="/fever.png"
                alt={category.cat_name_en}
                width={60}
                height={60}
              />
            </div>

            <div className="flex flex-col">
              <p className="text-[16px] font-semibold">{category.cat_name_en}</p>
              <p className="text-[#7E7E7E] font-normal text-[14px]">
                Subcategory: {category.no_of_subcat}
              </p>
            </div>

            <div className="ml-auto font-semibold text-[16px] flex flex-col items-center">
              <span className="text-black">
                {duas.filter((dua) => dua.cat_id === category.cat_id).length}
              </span>
              <span className="text-[#7E7E7E] font-normal text-[14px]">Duas</span>
            </div>
          </div>

          <ul className="ml-6 border-l-2 border-dashed border-primary">
            {selectedCategory === category.cat_id &&
              subcategories
                .filter((subcategory) => subcategory.cat_id === category.cat_id)
                .map((subcategory) => (
                  <li key={subcategory.id} className="relative my-2">
                    <div
                      className="flex items-center gap-2 cursor-pointer"
                      onClick={() => handleSubClick(subcategory.subcat_id)}
                    >
                      <span className="w-2 h-2 bg-primary rounded-full border border-primary"></span>
                      <p className="text-sm">
                        {subcategory.subcat_name_en}
                        <span className="ml-2 text-xs text-gray-400">
                          (
                          {
                            duas.filter(
                              (dua) => dua.subcat_id === subcategory.subcat_id
                            ).length
                          }{" "}
                          Duas)
                        </span>
                      </p>
                    </div>

                    <ul className="ml-6 border-l-2 border-dashed border-gray-300">
                      {selectedSubCategory === subcategory.subcat_id &&
                        duas
                          .filter((dua) => dua.subcat_id === subcategory.subcat_id)
                          .map((dua) => (
                            <li key={dua.id} className="relative my-2">
                              <div className="flex items-center gap-2">
                                <span className="w-1 h-1 bg-primary border border-primary rounded-full"></span>
                                <p className="text-xs">{dua.dua_name_en}</p>
                              </div>
                            </li>
                          ))}
                    </ul>
                  </li>
                ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
