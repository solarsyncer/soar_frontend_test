"use client";

import { ProfileForm } from "@/components/settings/ProfileForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SettingsPage() {
  return (
    <div className="md:p-8">
      <div className="max-w-[1440px] mx-auto bg-white rounded-2xl p-1 md:p-6">
        <Tabs defaultValue="profile" className="mt-6 md:mt-0">
          <TabsList>
            <TabsTrigger value="profile">Edit Profile</TabsTrigger>
            <TabsTrigger value="preferences" disabled>
              Preferences
            </TabsTrigger>
            <TabsTrigger value="security" disabled>
              Security
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <ProfileForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
