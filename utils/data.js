// const fetchCategories = () => {
//   fetch("https://ird-duaruqyah-backend.onrender.com/category")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Failed to fetch categories");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       setCategories(data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

// const fetchSubCategories = () => {
//   fetch("https://ird-duaruqyah-backend.onrender.com/sub_category")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Failed to fetch categories");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       setSubCategories(data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

// export { fetchCategories, fetchSubCategories };


import axios from "axios";

const fetchData = async (url, setState) => {
  try {
    const response = await axios.get(url);
    setState(response.data);
  } catch (error) {
    console.error(`Failed to fetch data from ${url}:`, error.message);
  }
};

const fetchCategories = (setCategories) => {
  fetchData("https://ird-duaruqyah-backend.onrender.com/category", setCategories);
};

const fetchSubCategories = (setSubCategories) => {
  fetchData("https://ird-duaruqyah-backend.onrender.com/sub_category", setSubCategories);
};

export { fetchCategories, fetchSubCategories };
