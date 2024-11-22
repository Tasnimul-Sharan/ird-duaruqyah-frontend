"use client";
import { useState, useEffect, useRef } from "react";
import { CategoryList, DuaList } from "../components";
import Image from "next/image";

const MainSection = () => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubCategories] = useState([]);
  const [duas, setDuas] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const selectedRef = useRef(null);

  const handleClick = (categoryId) => {
    selectedRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    setSelectedCategory(categoryId);
  };
  const handleSubClick = (subcategoryId) => {
    setSelectedSubCategory((prevSubCategory) => {
      return prevSubCategory === subcategoryId ? null : subcategoryId;
    });
  };

  useEffect(() => {
    fetchCategories();
    fetchSubCategories();
    fetchDuas();
  }, []);

  const fetchCategories = () => {
    fetch("https://ird-duaruqyah-backend.onrender.com/category")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchSubCategories = () => {
    fetch("https://ird-duaruqyah-backend.onrender.com/sub_category")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        return response.json();
      })
      .then((data) => {
        setSubCategories(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchDuas = () => {
    fetch("https://ird-duaruqyah-backend.onrender.com/dua")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        return response.json();
      })
      .then((data) => {
        setDuas(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex flex-row gap-2 ">
      <div className=" w-1/3 h-[80vh] bg-white rounded-2xl flex flex-col ">
        <h1 className="py-3 w-full text-[17px] text-[#FFFFFF] font-semibold bg-primary rounded-t-2xl text-center">
          Categories
        </h1>
        <div className="p-2">
          <div className="relative mt-1">
            <button className="absolute left-0 top-0 mt-2 ml-1 py-2 px-2">
             <Image src="/search_icon-2.png" alt="Logo" width={16.5} height={16.5} />
            </button>
            <input
              type="text"
              placeholder="Search Categories "
              className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>
        </div>
        <div className=" overflow-auto">
          <ul>
            <CategoryList
              categories={categories}
              subcategories={subcategories}
              duas={duas}
              selectedCategory={selectedCategory}
              selectedSubCategory={selectedSubCategory}
              selectedRef={selectedRef}
              handleClick={handleClick}
              handleSubClick={handleSubClick}
            />
          </ul>
        </div>
      </div>

      <div className="w-full h-[88vh] overflow-auto lg:mx-2">
        <DuaList
          subcategories={subcategories}
          duas={duas}
          selectedCategory={selectedCategory}
        />
      </div>
    </div>
  );
};

export default MainSection;
