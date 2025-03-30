"use client";

import { useState, useRef, lazy, Suspense, useEffect } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { useApp } from "@/context/AppContext";

// Lazy load the Calendar component
const Calendar = lazy(() =>
  import("@/components/ui/calendar").then((mod) => ({
    default: mod.Calendar,
  }))
);

// Error icon component to reduce repetition
const ErrorIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4 mr-1"
  >
    <path
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
      clipRule="evenodd"
    />
  </svg>
);

interface ProfileFormData {
  name: string;
  username: string;
  email: string;
  password: string;
  dateOfBirth: Date | undefined;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
  avatar: string;
}

// Field error message component to reduce repetition
const FieldError = ({ message }: { message: string }) => (
  <span className="text-red-500 text-sm mt-1 flex items-center">
    <ErrorIcon />
    {message}
  </span>
);

export function ProfileForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const { user, loading, error } = useApp();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ProfileFormData>({
    defaultValues: {
      name: user?.name || "",
      username: user?.name || "",
      email: user?.email || "",
      password: user?.password || "",
      dateOfBirth: user?.dateOfBirth ? new Date(user.dateOfBirth) : undefined,
      presentAddress: user?.presentAddress || "",
      permanentAddress: user?.permanentAddress || "",
      city: user?.city || "",
      postalCode: user?.postalCode || "",
      country: user?.country || "",
      avatar: user?.avatar || "/images/avatar.png",
    },
  });

  useEffect(() => {
    if (!loading.user && user) {
      setValue("name", user.name || "");
      setValue("username", user.username || "");
      setValue("email", user.email || "");
      setValue("password", user.password || "");
      setValue(
        "dateOfBirth",
        user.dateOfBirth ? new Date(user.dateOfBirth) : undefined
      );
      setValue("presentAddress", user.presentAddress || "");
      setValue("permanentAddress", user.permanentAddress || "");
      setValue("city", user.city || "");
      setValue("postalCode", user.postalCode || "");
      setValue("country", user.country || "");
      setValue("avatar", user.avatar || "/images/avatar.png");
    }
  }, [loading.user, user, setValue]);

  const onSubmit = (data: ProfileFormData) => {
    console.log(data);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setValue("avatar", imageUrl);
    }
  };

  const avatar = watch("avatar");

  const inputClassName = (fieldName: keyof ProfileFormData) => `
    h-[50px] text-[#232323] transition-colors duration-200 outline-none
    ${
      errors[fieldName]
        ? "border-red-500 focus:border-red-500 focus:ring-0 focus:ring-offset-0 ring-0 ring-offset-0"
        : "border-[#DFEAF2] focus:border-[#232323] focus:ring-1 focus:ring-[#232323]"
    }
  `;

  if (loading.user) {
    return (
      <div className="h-[50vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#343C6A]"></div>
      </div>
    );
  }

  if (error.user) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-2">
            Failed to load profile
          </div>
          <div className="text-gray-600">{error.user}</div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-center lg:flex-row lg:items-start gap-6 mb-8 px-3 md:px-6">
        <div>
          <div className="relative w-[90px] h-[90px]">
            <Image
              src={avatar}
              alt="Profile"
              width={90}
              height={90}
              className="rounded-full object-cover w-[90px] h-[90px]"
              loading="lazy"
              priority={false}
            />
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="absolute top-14 right-0 w-[30px] h-[30px] bg-black rounded-full flex items-center justify-center shadow-sm hover:bg-gray-700 active:bg-gray-700/90 transition-colors cursor-pointer"
            >
              <Image
                src="/icons/edit.svg"
                alt="Edit"
                width={16}
                height={16}
                loading="lazy"
              />
            </button>
          </div>
        </div>

        <div className="w-full flex-1 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2">Your Name</label>
              <Input
                {...register("name", { required: "Name is required" })}
                placeholder="Enter your name"
                className={inputClassName("name")}
              />
              {errors.name && (
                <FieldError message={errors.name.message as string} />
              )}
            </div>
            <div>
              <label className="block text-sm mb-2">User Name</label>
              <Input
                {...register("username", { required: "Username is required" })}
                placeholder="Enter your username"
                className={inputClassName("username")}
              />
              {errors.username && (
                <FieldError message={errors.username.message as string} />
              )}
            </div>
            <div>
              <label className="block text-sm mb-2">Email</label>
              <Input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address",
                  },
                  validate: {
                    validDomain: (value) => {
                      const domain = value.split("@")[1];
                      return (
                        (domain && domain.includes(".")) ||
                        "Invalid email domain"
                      );
                    },
                  },
                })}
                placeholder="Enter your email"
                className={inputClassName("email")}
                onBlur={(e) => {
                  const input = e.target;
                  if (input.value && !input.validity.valid) {
                    setValue("email", input.value, { shouldValidate: true });
                  }
                }}
              />
              {errors.email && (
                <FieldError message={errors.email.message as string} />
              )}
            </div>
            <div>
              <label className="block text-sm mb-2">Password</label>
              <Input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                placeholder="Enter your password"
                className={inputClassName("password")}
              />
              {errors.password && (
                <FieldError message={errors.password.message as string} />
              )}
            </div>
            <div>
              <label className="block text-sm mb-2">Date of Birth</label>
              <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                <PopoverTrigger asChild>
                  <div className="relative cursor-pointer">
                    <Input
                      type="text"
                      value={
                        watch("dateOfBirth")
                          ? format(watch("dateOfBirth") as Date, "dd MMMM yyyy")
                          : ""
                      }
                      placeholder="Enter your date of birth"
                      className={inputClassName("dateOfBirth")}
                      readOnly
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <Image
                        src="/icons/down.svg"
                        alt="Calendar"
                        width={12}
                        height={6}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Suspense
                    fallback={<div className="p-4">Loading calendar...</div>}
                  >
                    <Calendar
                      mode="single"
                      selected={watch("dateOfBirth") as Date}
                      onSelect={(date) => {
                        setValue("dateOfBirth", date);
                        setIsCalendarOpen(false);
                      }}
                      initialFocus
                      className="rounded-md border border-[#DFEAF2]"
                    />
                  </Suspense>
                </PopoverContent>
              </Popover>
              {errors.dateOfBirth && (
                <FieldError message={errors.dateOfBirth.message as string} />
              )}
            </div>
            <div>
              <label className="block text-sm mb-2">Present Address</label>
              <Input
                {...register("presentAddress", {
                  required: "Present address is required",
                })}
                placeholder="Enter your present address"
                className={inputClassName("presentAddress")}
              />
              {errors.presentAddress && (
                <FieldError message={errors.presentAddress.message as string} />
              )}
            </div>
            <div>
              <label className="block text-sm mb-2">Permanent Address</label>
              <Input
                {...register("permanentAddress", {
                  required: "Permanent address is required",
                })}
                placeholder="Enter your permanent address"
                className={inputClassName("permanentAddress")}
              />
              {errors.permanentAddress && (
                <FieldError
                  message={errors.permanentAddress.message as string}
                />
              )}
            </div>
            <div>
              <label className="block text-sm mb-2">City</label>
              <Input
                {...register("city", { required: "City is required" })}
                placeholder="Enter your city"
                className={inputClassName("city")}
              />
              {errors.city && (
                <FieldError message={errors.city.message as string} />
              )}
            </div>
            <div>
              <label className="block text-sm mb-2">Postal Code</label>
              <Input
                {...register("postalCode", {
                  required: "Postal code is required",
                })}
                placeholder="Enter your postal code"
                className={inputClassName("postalCode")}
              />
              {errors.postalCode && (
                <FieldError message={errors.postalCode.message as string} />
              )}
            </div>
            <div>
              <label className="block text-sm mb-2">Country</label>
              <Input
                {...register("country", { required: "Country is required" })}
                placeholder="Enter your country"
                className={inputClassName("country")}
              />
              {errors.country && (
                <FieldError message={errors.country.message as string} />
              )}
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="h-[50px] px-8 bg-[#232323] text-white rounded-2xl w-full md:w-[190px] font-medium hover:bg-[#3a3a3a] active:bg-[#1a1a1a] transition-colors duration-200"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
