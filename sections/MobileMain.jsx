"use client";
import { useState, useEffect, useRef } from "react";
import { CategoryList, DuaList } from "../components";
import Image from "next/image";

const MobileMainSection = () => {
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
    fetch("http://localhost:5000/category")
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
    fetch("http://localhost:5000/sub_category")
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
    fetch("http://localhost:5000/dua")
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
    <div className="flex flex-col gap-4 ">
      <div className=" w-full h-[30vh]  bg-white rounded-2xl flex flex-col ">
        <div className="py-3 w-full bg-primary rounded-t-2xl text-center text-[15px] text-[#FFFFFF] font-semibold">
          Categories
        </div>
        <div className="p-2">
          <div className="relative mt-1">

            <button className="absolute right-0 top-0 ml-1 py-2 px-2">
             <Image
             src="/search-icon.png"
             alt="Search Icon"
             width={44}
             height={44}
             className="rounded-md"
             />
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

      <div className="w-full h-[60vh] overflow-auto">
        <DuaList
          subcategories={subcategories}
          duas={duas}
          selectedCategory={selectedCategory}
        />
      </div>
    </div>
  );
};

export default MobileMainSection;
