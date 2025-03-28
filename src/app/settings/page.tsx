export default function SettingsPage() {
  return (
    <div className="space-y-6">
      {/* Profile Section */}
      <div className="card">
        <h2 className="text-2xl font-semibold text-[#232323] mb-4">
          Profile Settings
        </h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-[100px] h-[100px] rounded-full bg-[#F5F7FA] flex items-center justify-center">
              <span className="text-4xl text-[#8BA3CB]">JD</span>
            </div>
            <div>
              <h3 className="text-lg font-medium text-[#232323]">John Doe</h3>
              <p className="text-[#8BA3CB]">john.doe@example.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Account Settings */}
      <div className="card">
        <h2 className="text-2xl font-semibold text-[#232323] mb-4">
          Account Settings
        </h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-[#F5F7FA]">
            <h3 className="text-lg font-medium text-[#232323] mb-2">
              Language
            </h3>
            <p className="text-[#8BA3CB]">English (US)</p>
          </div>
          <div className="p-4 rounded-lg bg-[#F5F7FA]">
            <h3 className="text-lg font-medium text-[#232323] mb-2">
              Time Zone
            </h3>
            <p className="text-[#8BA3CB]">UTC+00:00</p>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="card">
        <h2 className="text-2xl font-semibold text-[#232323] mb-4">
          Notification Settings
        </h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-[#F5F7FA]">
            <h3 className="text-lg font-medium text-[#232323] mb-2">
              Email Notifications
            </h3>
            <p className="text-[#8BA3CB]">
              Receive notifications about account activity
            </p>
          </div>
          <div className="p-4 rounded-lg bg-[#F5F7FA]">
            <h3 className="text-lg font-medium text-[#232323] mb-2">
              Push Notifications
            </h3>
            <p className="text-[#8BA3CB]">
              Receive notifications on your mobile device
            </p>
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="card">
        <h2 className="text-2xl font-semibold text-[#232323] mb-4">
          Security Settings
        </h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-[#F5F7FA]">
            <h3 className="text-lg font-medium text-[#232323] mb-2">
              Two-Factor Authentication
            </h3>
            <p className="text-[#8BA3CB]">
              Add an extra layer of security to your account
            </p>
          </div>
          <div className="p-4 rounded-lg bg-[#F5F7FA]">
            <h3 className="text-lg font-medium text-[#232323] mb-2">
              Password
            </h3>
            <p className="text-[#8BA3CB]">Last changed 3 months ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}
