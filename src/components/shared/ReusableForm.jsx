/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
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
import { Sparkles } from "lucide-react";
import { FileUpload } from "@/components/ui/file-upload";

export function ReusableForm({
  pageTitle,
  schema,
  onSubmit,
  defaultValues,
  showFileUpload = false,
}) {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues || {},
  });

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
      <Card className="w-full max-w-md mx-auto bg-white dark:bg-neutral-950 shadow-lg rounded-lg overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 dark:from-orange-600 dark:to-red-600 p-6">
          <CardTitle className="text-2xl font-bold text-white flex items-center justify-center">
            <Sparkles className="w-6 h-6 mr-2" />
            {pageTitle}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              {Object.entries(schema.shape).map(([name, field]) =>
                renderField(name, field)
              )}
            </div>
            {showFileUpload && (
              <FileUpload
                maxFiles={5}
                onFileChange={(files) => console.log(files)}
                className="p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-md"
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