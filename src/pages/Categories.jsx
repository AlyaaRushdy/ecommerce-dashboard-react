import Header from "@/components/shared/Header";
import DataTable from "@/components/shared/DataTable";
import { categoriesColumns } from "@/data table columns/categoriesColumns";
import {useState , useEffect} from 'react';
import axios from "axios";
import { Navigate } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/categories")
      .then((res) => {
        if(res.status===200){
          setCategories(res.data.categories)}    
        }
      )
      .catch((err) => {
        console.log(err);
      });
  }, [categories]);

  // Handle delete request to backend
  const handleDeleteCategory = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      axios
        .delete(`http://localhost:5000/categories/${id}`)
        .catch((err) => {
          console.log("Error deleting category:", err);
        });
    }
  };

  // Navigate to the edit page for a specific category
  const handleEditCategory = (id) => {
  Navigate(`/categories/edit/${id}`);
};

  return (
    <>
      <div className="p-5">
        <Header currentPage={"Categories"} />
        <div className="py-4">
          <DataTable
            ButtonLink={"/categories/create"}
            ButtonText={"Create Category"}
            columns={categoriesColumns(
              handleEditCategory,
              handleDeleteCategory
            )}
            data={categories}
            tableTitle={"All Categories"}
            className="py-4"
          />
        </div>
      </div>
      <main className="flex flex-1 flex-col gap-4 md:gap-8 py-4"></main>
    </>
  );
}

export default Categories;
