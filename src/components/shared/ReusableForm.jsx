"use client";

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
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Sparkles, CalendarIcon } from "lucide-react";
import { FileUpload } from "@/components/ui/file-upload";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";

export function ReusableForm({
  pageTitle,
  pageName,
  schema,
  defaultValues,
  showFileUpload = false,
  onSubmit,
}) {
  const [files, setFiles] = useState([]);

  const getSchemaShape = (schema) => {
    if (schema instanceof z.ZodEffects) {
      return getSchemaShape(schema._def.schema);
    }
    return schema.shape;
  };

  const schemaShape = getSchemaShape(schema);


  const form = useForm({
    resolver: schema ? zodResolver(schema) : undefined,
    defaultValues: defaultValues || {},
  });

  const handleSubmit = async (data) => {
    try {
      console.log("Form Values: ", form.getValues());

      const formData = new FormData();

      // Append form fields to FormData
      Object.entries(data).forEach(([key, value]) => {
        if (value instanceof Date) {
          formData.append(key, format(value, "yyyy-MM-dd"));
        } else {
          formData.append(key, value);
        }
      });
      console.log([...formData.entries()]);
      // Append files to FormData if available
      files.forEach((file) => {
        formData.append("files", file);
      });

      await onSubmit(formData);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    }
  };

  const renderField = (name, field) => {
    let inputComponent;

    if (field instanceof z.ZodString) {
      if (field.description === "textarea") {
        inputComponent = (
          <Textarea
            placeholder={`Enter ${name}`}
            {...form.register(name)}
            className="resize-none"
          />
        );
      } else if (field.description === "password") {
        inputComponent = (
          <Input
            placeholder={`Enter ${name}`}
            {...form.register(name)}
            type="password"
          />
        );
      } else {
        inputComponent = (
          <Input placeholder={`Enter ${name}`} {...form.register(name)} />
        );
      }
    } else if (field instanceof z.ZodNumber) {
      inputComponent = (
        <Input
          type="number"
          placeholder={`Enter ${name}`}
          {...form.register(name, { valueAsNumber: true })}
        />
      );
    } else if (field instanceof z.ZodEnum) {
      const options = field.options;
      inputComponent = (
        <Select
          onValueChange={(value) => form.setValue(name, value)}
          defaultValue={form.getValues(name)}
        >
          <SelectTrigger>
            <SelectValue placeholder={`Select ${name}`} />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      );
    } else if (field instanceof z.ZodDate) {
      inputComponent = (
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={`w-full justify-start text-left font-normal ${
                !form.getValues(name) && "text-muted-foreground"
              }`}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {form.getValues(name)
                ? format(form.getValues(name), "PPP")
                : `Select ${name}`}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={form.getValues(name)}
              onSelect={(date) => form.setValue(name, date)}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      );
    } else {
      inputComponent = (
        <Input placeholder={`Enter ${name}`} {...form.register(name)} />
      );
    }

    return (
      <FormField
        key={name}
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {name}
            </FormLabel>
            <FormControl>{inputComponent}</FormControl>
            <FormMessage className="text-xs text-red-500" />
          </FormItem>
        )}
      />
    );
  };

  return (
    <Form {...form}>
      <Card className="w-full max-w-md mx-auto bg-white dark:bg-neutral-900 shadow-lg rounded-lg overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 dark:from-orange-600 dark:to-red-600 p-6">
          <CardTitle className="text-2xl font-bold text-white flex items-center justify-center">
            <Sparkles className="w-6 h-6 mr-2" />
            {pageTitle}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            encType="multipart/form-data"
            className="space-y-6"
          >
            <div className="space-y-4">
              {schemaShape && Object.keys(schemaShape).length > 0 ? (
                Object.entries(schemaShape).map(([name, field]) =>
                  renderField(name, field)
                )
              ) : (
                <p>No form fields defined</p>
              )}
            </div>
            {showFileUpload && (
              <FileUpload
                onChange={(selectedFiles) => setFiles(selectedFiles)}
              />
            )}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 dark:from-orange-600 dark:to-red-600 text-white font-bold py-2 px-4 rounded-md hover:from-orange-600 hover:to-red-600 dark:hover:from-orange-700 dark:hover:to-red-700 transition-all duration-200 ease-in-out transform hover:scale-105"
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </Form>
  );
}
