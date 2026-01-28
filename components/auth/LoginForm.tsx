"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginType } from "@/lib/schemas/authSchema";
import { loginUser } from "@/app/_actions/auth/loginUser";
import { useRouter } from "next/navigation";
import { useAuth } from "./AuthContext";
import { Spinner } from "../ui/spinner";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { refreshSession } = useAuth();
  const form = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginType) {
    try {
      const result = await loginUser(data);
      if (result.success) {
        form.reset();
        await refreshSession();
        router.push("/");
      } else {
        form.setError("root", { message: "Invalid Credentials" });
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="mx-auto w-full max-w-2xl space-y-8 px-4 py-12 md:px-8">
      <div className="space-y-4 text-center">
        <h1 className="text-preset-2 md:text-preset-2-tablet text-neutral-900">
          Welcome back
        </h1>
        <p className="text-preset-6 text-neutral-600">
          Sign in to continue exploring delicious, healthy recipes.
          <br />
          You need an account to add and share your own recipes.
        </p>
      </div>

      <div className="bg-card border-border rounded-[10px] border p-6 shadow-[0_8px_16px_-9px_#163A3429] md:p-8">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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

          {form.formState.errors.root && (
            <FieldError>{form.formState.errors.root.message}</FieldError>
          )}

          {/* Submit Button */}
          <Button type="submit" size="xl" className="w-full">
            {form.formState.isSubmitting ? (
              <Spinner className="size-7" />
            ) : (
              <span className="text-preset-8">Sign In</span>
            )}
          </Button>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-preset-9 text-neutral-600">
              Don&apos;t have an account?{" "}
              <Link
                href={"/auth/sign-up"}
                type="button"
                className="text-primary text-preset-8 font-bold hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
