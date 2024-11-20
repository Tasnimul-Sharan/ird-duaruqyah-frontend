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
    <>
      {categories.map((category) => (
        <li key={category.id} className="my-2 px-2">
          <div
            className={`flex flex-row gap-2 justify-start items-center py-3 px-2 rounded-xl ${
              selectedCategory === category.cat_id
                ? "bg-ascent"
                : "hover:bg-ascent"
            }`}
            onClick={() => handleClick(category.cat_id)}
            ref={selectedCategory === category.cat_id ? selectedRef : null}
          >
            <div className=" bg-ascent py-2 px-3 rounded-md">
              <Image src="/fever.png" alt="allah_1" width={30} height={30} />
            </div>
            <div>
              <p className=" text-sm">{category.cat_name_en}</p>
              <p className=" text-xs">Subcategory: {category.no_of_subcat}</p>
            </div>
          </div>
          <ul>
            {selectedCategory === category.cat_id &&
              subcategories
                .filter((subcategory) => subcategory.cat_id === category.cat_id)
                .map((subcategory) => (
                  <li key={subcategory.id} className="ml-6 my-2 px-2">
                    <div onClick={() => handleSubClick(subcategory.subcat_id)}>
                      <p className=" text-sm">
                        <span className="w-[2px] h-[2px] bg-primary  border border-primary rounded-full px-[1px] mr-1">
                          {" "}
                        </span>{" "}
                        {subcategory.subcat_name_en}{" "}
                      </p>
                    </div>
                    <div>
                      {selectedSubCategory === subcategory.subcat_id &&
                        duas
                          .filter(
                            (dua) => dua.subcat_id === subcategory.subcat_id
                          )
                          .map((dua) => (
                            <div key={dua.id} className="ml-6 my-2 px-2">
                              <p className="text-xs">
                                {" "}
                                <span className="w-[1px] h-[1px] bg-primary  border border-primary rounded-full mr-1"></span>{" "}
                                {dua.dua_name_en}
                              </p>
                            </div>
                          ))}
                    </div>
                  </li>
                ))}
          </ul>
        </li>
      ))}
    </>
  );
};

export default CategoryList;
