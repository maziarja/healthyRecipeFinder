"use client";

import { Controller, useForm } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { ChefHat, ImageIcon } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Textarea } from "../ui/textarea";
import IconCookTime from "../ui/icons/icon-cook-time";
import IconPrepTime from "../ui/icons/icon-prep-time";
import IconServing from "../ui/icons/icon-servings";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  addRecipeFormSchema,
  AddRecipeFormType,
} from "@/lib/schemas/addRecipe";
import Image from "next/image";
import { saveRecipe } from "@/app/_actions/recipes/saveRecipe";
import { Spinner } from "../ui/spinner";
import { RecipeType } from "@/models/Recipe";

type Props = { mode?: "add" | "update"; recipe?: RecipeType };

function AddRecipeForm({ mode = "add", recipe }: Props) {
  const form = useForm<AddRecipeFormType>({
    resolver: zodResolver(addRecipeFormSchema),
    defaultValues: {
      title: mode === "add" ? "" : recipe?.title,
      overview: mode === "add" ? "" : recipe?.overview,
      ingredients: mode === "add" ? "" : recipe?.ingredients.join(","),
      instructions: mode === "add" ? "" : recipe?.instructions.join(","),
      serving: mode === "add" ? "" : recipe?.serving.toString(),
      prepMinutes: mode === "add" ? "" : recipe?.prepMinutes.toString(),
      cookingTime: mode === "add" ? "" : recipe?.cookingTime.toString(),
    },
  });

  async function onSubmit(data: AddRecipeFormType) {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("overview", data.overview);
    formData.append("ingredients", data.ingredients);
    formData.append("instructions", data.instructions);
    formData.append("serving", data.serving);
    formData.append("prepMinutes", data.prepMinutes);
    formData.append("cookingTime", data.cookingTime);

    if (data.image) {
      formData.append("image", data.image);
    }

    await saveRecipe(formData, recipe?._id);
  }
  // eslint-disable-next-line react-hooks/incompatible-library
  const image = form.watch("image");

  return (
    <Card className="bg-background mx-auto mt-4 max-w-2xl border-0 shadow-none lg:max-w-4xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ChefHat className="size-6" />
          <span className="text-preset-4">
            {mode === "add" ? "Add New Recipe" : "Update Recipe"}
          </span>
        </CardTitle>
        <CardDescription>Share your recipe with others</CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Title */}
          <Controller
            name="title"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Title</FieldLabel>

                <Input
                  {...field}
                  id={field.name}
                  placeholder="Chicken Alfredo"
                  aria-invalid={fieldState.invalid}
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Overview */}
          <Controller
            name="overview"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Overview</FieldLabel>
                <Textarea
                  {...field}
                  id="overview"
                  placeholder="A creamy and delicious pasta recipe..."
                  rows={4}
                  aria-invalid={fieldState.invalid}
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Ingredient */}
          <Controller
            name="ingredients"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Ingredients</FieldLabel>
                <Textarea
                  {...field}
                  id="ingredients"
                  placeholder="Separate ingredients with commas (e.g. carrot, lemon)"
                  rows={4}
                  aria-invalid={fieldState.invalid}
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Instructions */}
          <Controller
            name="instructions"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Instructions</FieldLabel>

                <Textarea
                  {...field}
                  id="instructions"
                  placeholder="Separate instructions with commas"
                  rows={4}
                  aria-invalid={fieldState.invalid}
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <div className="flex flex-col gap-6 md:flex-row">
            {/* Serving */}
            <Controller
              name="serving"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Serving size</FieldLabel>
                  <div className="relative">
                    <IconServing className="text-muted-foreground absolute top-1/2 left-3 size-5 -translate-y-1/2" />
                    <Input
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                      type="number"
                      className="pl-10"
                    />
                  </div>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Prep Time */}
            <Controller
              name="prepMinutes"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>
                    Prep Time (minutes)
                  </FieldLabel>
                  <div className="relative">
                    <IconPrepTime className="text-muted-foreground absolute top-1/2 left-3 size-5 -translate-y-1/2" />
                    <Input
                      {...field}
                      id={field.name}
                      type="number"
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                      className="pl-10"
                    />
                  </div>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Cooking Time */}
            <Controller
              name="cookingTime"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>
                    Cooking Time (minutes)
                  </FieldLabel>
                  <div className="relative">
                    <IconCookTime className="text-muted-foreground absolute top-1/2 left-3 size-5 -translate-y-1/2" />
                    <Input
                      {...field}
                      id={field.name}
                      type="number"
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                      className="pl-10"
                    />
                  </div>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>

          {/* Image */}
          {mode === "add" && (
            <Controller
              name="image"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Image</FieldLabel>
                  <label
                    htmlFor="image"
                    className="border-input bg-background text-muted-foreground hover:bg-accent hover:text-foreground flex h-12 cursor-pointer items-center justify-center gap-2 rounded-md border border-dashed px-4 text-sm font-medium transition-colors"
                  >
                    <ImageIcon className="size-5" />
                    <span className="text-preset-7">Upload image</span>
                  </label>
                  <Input
                    id={field.name}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    placeholder="Chicken Alfredo"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                    onChange={(e) => field.onChange(e.target.files?.[0])}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          )}

          {/* Image Preview */}
          {image && mode === "add" && (
            <div className="bg-muted relative mt-4 overflow-hidden rounded-xl border">
              <Image
                src={URL.createObjectURL(image)}
                alt="Recipe preview"
                width={800}
                height={500}
                className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />

              <div className="absolute right-3 bottom-3 left-3 flex items-center justify-between text-white">
                <span className="truncate text-sm font-medium">
                  {image.name}
                </span>
                <span className="text-xs opacity-80">
                  {(image.size / 1024 / 1024).toFixed(2)} MB
                </span>
              </div>
            </div>
          )}

          {/* Submit */}
          <Button type="submit" size={"md"} className="w-full">
            {form.formState.isSubmitting ? (
              <Spinner className="size-7" />
            ) : (
              <span className="text-preset-5">
                {mode === "add" ? "Add Recipe" : "Update Recipe"}
              </span>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default AddRecipeForm;
