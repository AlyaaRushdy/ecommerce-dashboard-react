
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
"use client";
import Header from '@/components/shared/Header'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  subject: z.string(),
  // .min(3, {
  //   message: "Username must be at least 3 characters.",
  // }),
  message: z.string().min(5, {
    message: "Message must be at least 5 characters.",
  }),
});

export default function Contact() {
  const form = useForm({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
  });

  const handleSubmit = async (data) => {
    try {
      // Simulate form submission
      console.log("Form Data: ", data);
      toast({
        title: "Success",
        description: "Message sent successfully.",
      });
      form.reset(); // Reset the form on success
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="p-5">
           <Header
          currentPage={"Contact"}
        />
       
      <Card className="w-full max-w-md mx-auto bg-white dark:bg-neutral-900 shadow-lg rounded-lg overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 dark:from-orange-600 dark:to-red-600 p-6">
          <CardTitle className="text-2xl font-bold text-white flex items-center justify-center">
            <Sparkles className="w-6 h-6 mr-2" />
            Contact Us
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your subject" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter your message" {...field} className="resize-none" />
                    </FormControl>
                    <FormMessage className="text-xs text-red-500" />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 dark:from-orange-600 dark:to-red-600 text-white font-bold py-2 px-4 rounded-md hover:from-orange-600 hover:to-red-600 dark:hover:from-orange-700 dark:hover:to-red-700 transition-all duration-200 ease-in-out transform hover:scale-105"
              >
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}