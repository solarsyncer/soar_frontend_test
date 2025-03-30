"use client";

import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

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
}

export function ProfileForm() {
  const [formData, setFormData] = useState<ProfileFormData>({
    name: "Charlene Reed",
    username: "Charlene Reed",
    email: "charlenereed@gmail.com",
    password: "••••••••••",
    dateOfBirth: new Date(1990, 0, 25), // January 25, 1990
    presentAddress: "San Jose, California, USA",
    permanentAddress: "San Jose, California, USA",
    city: "San Jose",
    postalCode: "45962",
    country: "USA",
  });

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center lg:flex-row lg:items-start gap-6 mb-8 px-3 md:px-6">
        <div>
          <div className="relative w-[90px] h-[90px]">
            <Image
              src="/images/avatar.png"
              alt="Profile"
              width={90}
              height={90}
              className="rounded-full"
            />
            <button
              type="button"
              className="absolute top-14 right-0 w-[30px] h-[30px] bg-black rounded-full flex items-center justify-center shadow-sm hover:bg-gray-700 active:bg-gray-700/90 transition-colors cursor-pointer"
            >
              <Image src="/icons/edit.svg" alt="Edit" width={16} height={16} />
            </button>
          </div>
        </div>

        <div className="w-full flex-1 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2">Your Name</label>
              <Input
                value={formData.name}
                placeholder="Enter your name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="h-[50px] border-[#DFEAF2] text-[#232323]"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">User Name</label>
              <Input
                value={formData.username}
                placeholder="Enter your username"
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                className="h-[50px] border-[#DFEAF2] text-[#232323]"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Email</label>
              <Input
                type="email"
                value={formData.email}
                placeholder="Enter your email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="h-[50px] border-[#DFEAF2] text-[#232323]"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Password</label>
              <Input
                type="password"
                value={formData.password}
                placeholder="Enter your password"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="h-[50px] border-[#DFEAF2] text-[#232323]"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Date of Birth</label>
              <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                <PopoverTrigger asChild>
                  <div className="relative cursor-pointer">
                    <Input
                      type="text"
                      value={
                        formData.dateOfBirth
                          ? format(formData.dateOfBirth, "dd MMMM yyyy")
                          : ""
                      }
                      placeholder="Enter your date of birth"
                      className="h-[50px] border-[#DFEAF2] text-[#232323] pr-12"
                      readOnly
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <Image
                        src="/icons/down.svg"
                        alt="Calendar"
                        width={12}
                        height={6}
                      />
                    </div>
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={formData.dateOfBirth}
                    onSelect={(date) => {
                      setFormData({ ...formData, dateOfBirth: date });
                      setIsCalendarOpen(false);
                    }}
                    initialFocus
                    className="rounded-md border border-[#DFEAF2]"
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <label className="block text-sm mb-2">Present Address</label>
              <Input
                value={formData.presentAddress}
                placeholder="Enter your present address"
                onChange={(e) =>
                  setFormData({ ...formData, presentAddress: e.target.value })
                }
                className="h-[50px] border-[#DFEAF2] text-[#232323]"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Permanent Address</label>
              <Input
                value={formData.permanentAddress}
                placeholder="Enter your permanent address"
                onChange={(e) =>
                  setFormData({ ...formData, permanentAddress: e.target.value })
                }
                className="h-[50px] border-[#DFEAF2] text-[#232323]"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">City</label>
              <Input
                value={formData.city}
                placeholder="Enter your city"
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                className="h-[50px] border-[#DFEAF2] text-[#232323]"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Postal Code</label>
              <Input
                value={formData.postalCode}
                placeholder="Enter your postal code"
                onChange={(e) =>
                  setFormData({ ...formData, postalCode: e.target.value })
                }
                className="h-[50px] border-[#DFEAF2] text-[#232323]"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Country</label>
              <Input
                value={formData.country}
                placeholder="Enter your country"
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
                className="h-[50px] border-[#DFEAF2] text-[#232323]"
              />
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
