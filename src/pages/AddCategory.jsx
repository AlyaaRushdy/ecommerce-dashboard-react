import { z } from "zod";
import { ReusableForm } from "@/components/shared/ReusableForm";
import Header from "@/components/shared/Header";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

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

export function AddCategory() {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/categories",
        data
      );
      if (response.status === 201) {
        toast({
          title: "Success",
          description: "Category added successfully.",
        });
        setTimeout(() => {
          navigate("/categories");
        }, 500); 
      }
    } catch (error) {
      console.error("Error creating category:", error);
      toast({
        title: "Error",
        description: "Failed to create category. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <div className="p-5">
        <Header
          currentPage={"Create Category"}
          prevPage={"Categories"}
          prevPageLink={"/categories"}
        />
        <div className="py-4">
          <ReusableForm
            pageTitle="Add Category"
            schema={CategorySchema}
            onSubmit={handleSubmit}
            showFileUpload={false}
            pageName="categories"
          />
        </div>
      </div>
    </>
  );
}
