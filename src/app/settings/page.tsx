"use client";

import { Suspense, lazy } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Lazy load the ProfileForm component
const ProfileForm = lazy(() =>
  import("../../components/settings/ProfileForm").then((mod) => ({
    default: mod.ProfileForm,
  }))
);

// Loading skeleton for the profile form
const ProfileFormSkeleton = () => (
  <div className="animate-pulse">
    <div className="flex flex-col items-center lg:flex-row lg:items-start gap-6 mb-8 px-3 md:px-6">
      <div className="w-[90px] h-[90px] bg-gray-200 rounded-full"></div>
      <div className="w-full flex-1 flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(10)].map((_, i) => (
            <div key={i}>
              <div className="h-5 w-20 bg-gray-200 mb-2 rounded"></div>
              <div className="h-[50px] w-full bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-end">
          <div className="h-[50px] w-[190px] bg-gray-200 rounded-2xl"></div>
        </div>
      </div>
    </div>
  </div>
);

// Coming soon content component
const ComingSoonContent = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
    <h3 className="text-2xl font-semibold text-[#232323] mb-3">{title}</h3>
    <p className="text-[#718EBF] max-w-[500px]">{description}</p>
  </div>
);

export default function SettingsPage() {
  return (
    <div className="md:p-8">
      <div className="max-w-[1440px] mx-auto bg-white rounded-2xl p-1 md:p-6">
        <Tabs defaultValue="profile" className="mt-6 md:mt-0">
          <TabsList className="w-full border-b border-[#DFEAF2] rounded-none h-[50px] bg-transparent p-0">
            <TabsTrigger
              value="profile"
              className="h-[50px] data-[state=active]:border-b-2 data-[state=active]:border-[#232323] data-[state=active]:text-[#232323] rounded-none text-[#718EBF] font-medium"
            >
              Edit Profile
            </TabsTrigger>
            <TabsTrigger
              value="preferences"
              className="h-[50px] data-[state=active]:border-b-2 data-[state=active]:border-[#232323] data-[state=active]:text-[#232323] rounded-none text-[#718EBF] font-medium"
            >
              Preferences
            </TabsTrigger>
            <TabsTrigger
              value="security"
              className="h-[50px] data-[state=active]:border-b-2 data-[state=active]:border-[#232323] data-[state=active]:text-[#232323] rounded-none text-[#718EBF] font-medium"
            >
              Security
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="mt-6">
            <Suspense fallback={<ProfileFormSkeleton />}>
              <ProfileForm />
            </Suspense>
          </TabsContent>

          <TabsContent value="preferences" className="mt-6">
            <ComingSoonContent
              title="Preferences Coming Soon"
              description="We're working on bringing you personalized preferences settings. Stay tuned for updates on themes, notifications, and more!"
            />
          </TabsContent>

          <TabsContent value="security" className="mt-6">
            <ComingSoonContent
              title="Security Features Coming Soon"
              description="Enhanced security features are on the way! Soon you'll be able to manage two-factor authentication, device management, and more."
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
