import { z } from "zod";
import { ReusableForm } from "@/components/shared/ReusableForm";
import Header from "@/components/shared/Header";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  email: z.string().email("please enter a valid email").min(1, {
    message: "email is required",
  }),
  password: z.string().describe("password").min(8, {
    message: "password must be atleast 8 characters long",
  }),
});

function AddAdmin() {
  const navigate = useNavigate();
  const defaultValues = {
    email: "",
    name: "",
    password: "",
  };

  const handleSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/admins/addNewAdmin",
        data
      );

      if (response.status === 201) {
        toast({
          variant: "success",
          description: "Admin added successfully.",
        });
        navigate("/settings?tab=owner");
      }
    } catch (error) {
      console.error("Error creating admin:", error);
      toast({
        title: "Error",
        description: "Failed to create admin. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <div className="p-5">
        <Header
          currentPage={"Add Admin"}
          prevPage={"Settings"}
          prevPageLink={"/settings?tab=owner"}
        />
        <div className="py-4">
          <ReusableForm
            pageTitle="Add Admin"
            schema={AdminSchema}
            onSubmit={handleSubmit}
            defaultValues={defaultValues}
          />
        </div>
      </div>
    </>
  );
}

export default AddAdmin;
