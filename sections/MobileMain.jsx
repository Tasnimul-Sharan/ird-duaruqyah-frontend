"use client";
import { useState, useEffect, useRef } from "react";
import { CategoryList, DuaList } from "../components";

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
        <div className="py-3 w-full bg-primary rounded-t-2xl text-center">
          Categories
        </div>
        <div className="p-2">
          <div className="relative mt-1">
            <button className="absolute left-0 top-0 mt-2 ml-1 py-2 px-2">
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
