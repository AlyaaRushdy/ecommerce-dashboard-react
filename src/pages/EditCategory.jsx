/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { z } from "zod";
import { ReusableForm } from "@/components/shared/ReusableForm";
import Header from "@/components/shared/Header";
import { toast } from "@/hooks/use-toast";

const CategorySchema = z.object({
  categoryTitle: z.string().min(2, {
    message: "Category Title must be at least 2 characters.",
  }),
  createdBy: z.enum(["Admin", "Editor", "Contributor"], {
    required_error: "Please select a creator.",
  }),
  stock: z.number().min(1, {
    message: "Stock must be at least 1.",
  }),
  description: z.string().optional(),
});

function EditCategory() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCategory();
  }, [id]);

  const fetchCategory = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/categories/${id}`
      );
      if (response.status === 200) {
        setCategory(response.data.category);
      }
    } catch (error) {
      console.error("Error fetching category:", error);
      toast({
        title: "Error",
        description: "Failed to fetch category. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (data) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/categories/${id}`,
        data
      );
      if (response.status === 200) {
        toast({
          title: "Success",
          description: "Category updated successfully.",
        });
        navigate("/categories");
      }
    } catch (error) {
      console.error("Error updating category:", error);
      toast({
        title: "Error",
        description: "Failed to update category. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <>
      <div className="p-5">
        <Header
          currentPage={"Edit Category"}
          prevPage={"Categories"}
          prevPageLink={"/categories"}
        />
        <div className="py-4">
          <ReusableForm
            pageTitle="Edit Category"
            schema={CategorySchema}
            onSubmit={handleSubmit}
            defaultValues={category}
            showFileUpload={false}
            pageName="categories"
          />
        </div>
      </div>
    </>
  );
}

export default EditCategory;
