"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, SignUpType } from "@/lib/schemas/authSchema";

function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<SignUpType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(data: SignUpType) {
    console.log(data);
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-8 px-4 py-12 md:px-8">
      <div className="space-y-4 text-center">
        <h1 className="text-preset-2 md:text-preset-2-tablet text-neutral-900">
          Create your account
        </h1>
        <p className="text-preset-6 text-neutral-600">
          Join us to discover delicious, healthy recipes tailored to your taste.
          <br />
          Create an account to add and share your own recipes.
        </p>
      </div>

      <div className="bg-card border-border rounded-[10px] border p-6 shadow-[0_8px_16px_-9px_#163A3429] md:p-8">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <Controller
            name="fullName"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Full Name</FieldLabel>
                <div className="relative">
                  <User className="text-muted-foreground absolute top-1/2 left-3 size-5 -translate-y-1/2" />
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your full name"
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

          {/* Email Field */}
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Email Address</FieldLabel>
                <div className="relative">
                  <Mail className="text-muted-foreground absolute top-1/2 left-3 size-5 -translate-y-1/2" />
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your email"
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

          {/* Password Field */}
          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                <div className="relative">
                  <Lock className="text-muted-foreground absolute top-1/2 left-3 size-5 -translate-y-1/2" />
                  <Input
                    {...field}
                    type={showPassword ? "text" : "password"}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Create a password"
                    autoComplete="off"
                    className="pl-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2 transition-colors"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="size-5" />
                    ) : (
                      <Eye className="size-5" />
                    )}
                  </button>
                </div>

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Confirm Password Field */}
          <Controller
            name="confirmPassword"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Confirm Password</FieldLabel>
                <div className="relative">
                  <Lock className="text-muted-foreground absolute top-1/2 left-3 size-5 -translate-y-1/2" />
                  <Input
                    {...field}
                    type={showConfirmPassword ? "text" : "password"}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder=" Confirm your password"
                    autoComplete="off"
                    className="pl-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2 transition-colors"
                    aria-label={
                      showConfirmPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="size-5" />
                    ) : (
                      <Eye className="size-5" />
                    )}
                  </button>
                </div>

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Submit Button */}
          <Button type="submit" size="xl" className="w-full">
            <span className="text-preset-8">Sign Up</span>
          </Button>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-preset-9 text-neutral-600">
              Already have an account?{" "}
              <Link
                href={"/auth/login"}
                type="button"
                className="text-primary text-preset-8 font-bold hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
