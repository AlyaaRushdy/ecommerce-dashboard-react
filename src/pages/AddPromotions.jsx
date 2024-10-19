import { z } from "zod";
import { ReusableForm } from "@/components/shared/ReusableForm";
import Header from "@/components/shared/Header";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const PromotionSchema = z
  .object({
    Name: z.string().min(2, {
      message: "Promotion title must be at least 2 characters.",
    }),
    discount: z
      .number()
      .positive({
        message: "Discount must be a positive number.",
      })
      .min(0.01, {
        message: "Discount cannot be less than 0.01.",
      }),
    "Discount Status": z.enum(["active", "pending", "expired"]).optional(),
    "Start Date": z.date({
      required_error: "Start date is required",
      invalid_type_error: "That's not a valid date!",
    }),
    "End Date": z.date({
      required_error: "End date is required",
      invalid_type_error: "That's not a valid date!",
    }),
  })
  .refine((data) => data["End Date"] > data["Start Date"], {
    message: "End date must be later than start date",
    path: ["End Date"],
  });

export default function AddPromotion() {
  const navigate = useNavigate();

  // Submission handler for form
  const handleSubmit = async (data) => {
    try {
      console.log("Form Values: ", data); // Check the captured values

      const formData = new FormData();

      // Append each field to FormData
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const value = data[key];
          if (value instanceof Date) {
            formData.append(key, value.toISOString()); // Ensure the date is in the correct format
          } else {
            formData.append(key, value);
          }
        }
      }

      console.log("FormData entries: ", [...formData.entries()]); // Log FormData for debugging

      // Submit the form data
      const response = await axios.post(
        "http://localhost:5000/coupons",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Ensure the content type is set
          },
        }
      );

      console.log("Promotion created successfully:", response.data);
      toast({
        title: "Success",
        description: "Promotion created successfully!",
      });
    } catch (error) {
      console.error(
        "Error creating promotion:",
        error.response ? error.response.data : error.message
      );
      toast({
        title: "Error",
        description: error.response
          ? error.response.data.message
          : "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    }
  };


  return (
    <div className="p-5">
      <Header
        currentPage="Create Promotion"
        prevPage="Promotions"
        prevPageLink="/promotions"
      />
      <div className="py-4">
        <ReusableForm
          pageTitle="Add Promotion"
          schema={PromotionSchema}
          onSubmit={handleSubmit}
          showFileUpload={false}
          pageName="promotions"
          defaultValues={{
            Name: "",
            discount: 0,
            "Discount Status": "pending",
            "Start Date": new Date(),
            "End Date": new Date(
              new Date().setMonth(new Date().getMonth() + 1)
            ),
          }}
        />
      </div>
    </div>
  );
}
