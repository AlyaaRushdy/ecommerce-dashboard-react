// import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import { setToken } from "@/slices/userSlice";
import { useToast } from "@/hooks/use-toast";
import ModeToggle from "@/components/shared/modeToggle";

function Login() {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const navigate = useNavigate();

  const loginSchema = z.object({
    email: z.string().email("please enter a valid email").min(1, {
      message: "email is required",
    }),
    password: z.string().min(8, {
      message: "password must be atleast 8 characters long",
    }),
  });

  const loginForm = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (data) => {
    axios
      .post(`http://localhost:5000/admins/login`, data)
      .then((res) => {
        if (res.status == 200) {
          const token = res.headers["authorization"].split(" ")[1];
          dispatch(setToken(token));
          toast({
            variant: "success",
            title: res.data.message,
          });
          navigate("/");
        }
      })
      .catch((err) => {
        if (err.response.status == 400) {
          toast({
            variant: "destructive",
            title: err.response.data.message,
            // action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        } else {
          console.log("err", err);
        }
      });
  };

  return (
    <div className="p-5 h-screen w-full flex justify-center items-center">
      <div className="absolute w-fit top-5 right-5">
        <ModeToggle />
      </div>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...loginForm}>
            <form
              onSubmit={loginForm.handleSubmit(handleSubmit)}
              className="space-y-8"
            >
              <FormField
                control={loginForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="abc@example.com"
                        type={"email"}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={loginForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="password"
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
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
