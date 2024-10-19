import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useSelector } from "react-redux";
import { useToast } from "@/hooks/use-toast";

function ChangePassword() {
  const { toast } = useToast();
  const { token } = useSelector((state) => state.user);

  const changePasswordSchema = z
    .object({
      oldPassword: z.string().min(8, {
        message: "password must be atleast 8 characters long",
      }),
      newPassword: z.string().min(8, {
        message: "password must be atleast 8 characters long",
      }),
      confirm: z.string().min(8, {
        message: "password must be atleast 8 characters long",
      }),
    })
    .refine((data) => data.newPassword === data.confirm, {
      message: "Passwords don't match",
      path: ["confirm"],
    });

  const changePasswordForm = useForm({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirm: "",
    },
  });

  const handleChangePassword = async (data) => {
    axios
      .put(`http://localhost:5000/admins/changePassword/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast({
          variant: "success",
          title: res.data.message,
        });
        changePasswordForm.reset();
      })
      .catch((err) => {
        if (err.response.status == 400) {
          toast({
            variant: "destructive",
            title: err.response.data.message,
          });
        } else {
          console.log(err);
        }
      });
  };

  return (
    <>
      <Form {...changePasswordForm}>
        <form
          onSubmit={changePasswordForm.handleSubmit(handleChangePassword)}
          className="space-y-8"
        >
          <FormField
            control={changePasswordForm.control}
            name="oldPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Old Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="old password"
                    type={"password"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={changePasswordForm.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="new password"
                    type={"password"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={changePasswordForm.control}
            name="confirm"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm New Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="new password"
                    type={"password"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );
}

export default ChangePassword;
