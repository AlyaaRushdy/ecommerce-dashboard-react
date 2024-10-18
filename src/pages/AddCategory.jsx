import { z } from "zod";
import { ReusableForm } from "@/components/shared/ReusableForm";
import Header from "@/components/shared/Header";


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
  const handleSubmit = (data) => {
    console.log("Category Data:", data);
    // Handle category submission
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
            pageName='categories'
          />
        </div>
      </div>
    </>
  );
}
