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

export { fetchCategories, fetchSubCategories };
