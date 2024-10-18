import {useState , useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "@/components/shared/Header";
import DataTable from "@/components/shared/DataTable";
import { toast } from "@/hooks/use-toast";
import categoriesColumns from '@/data table columns/categoriesColumns';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/categories");
      if (response.status === 200) {
        setCategories(response.data.categories);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      toast({
        title: "Error",
        description: "Failed to fetch categories. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  const handleDeleteCategory = async (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        const response = await axios.delete(
          `http://localhost:5000/categories/${id}`
        );
        if (response.status === 200) {
          toast({
            title: "Success",
            description: "Category deleted successfully.",
          });
          fetchCategories(); // Refresh the categories list
        }
      } catch (error) {
        console.error("Error deleting category:", error);
        toast({
          title: "Error",
          description: "Failed to delete category. Please try again.",
          variant: "destructive",
        });
      }
    }
  };

  const handleEditCategory = (id) => {
    navigate(`/categories/edit/${id}`);
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
            isLoading={isLoading}
          />
        </div>
      </div>
      <main className="flex flex-1 flex-col gap-4 md:gap-8 py-4"></main>
    </>
  );
}


export default Categories;
